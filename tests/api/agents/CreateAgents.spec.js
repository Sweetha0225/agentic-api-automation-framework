// Implements: TC_AGENTS_001, TC_AGENTS_002, TC_AGENTS_003, TC_AGENTS_004, TC_AGENTS_005, TC_AGENTS_006, TC_AGENTS_007, TC_AGENTS_008, TC_AGENTS_009, TC_AGENTS_010, TC_AGENTS_011, TC_AGENTS_012, TC_AGENTS_013, TC_AGENTS_014, TC_AGENTS_015, TC_AGENTS_016, TC_AGENTS_017, TC_AGENTS_018, TC_AGENTS_019, TC_AGENTS_020, TC_AGENTS_021, TC_AGENTS_022, TC_AGENTS_023, TC_AGENTS_024, TC_AGENTS_025, TC_AGENTS_026, TC_AGENTS_027, TC_AGENTS_028, TC_AGENTS_029, TC_AGENTS_030

const { test, expect, request } = require('@playwright/test');
const { test: agentsTest } = require('../../fixtures/agents.fixture');
const ConfigManager = require('../../../src/core/config/ConfigManager');

const testCases = require('../../../../../testcases.json');

test.describe('Agents API - Create Action', () => {

    testCases.forEach(tc => {
        if (tc.method === 'POST' && tc.endpoint === '/agents') {
            // Use the service fixture for all tests except the Auth test
            const testRunner = tc.category === 'Auth' ? test : agentsTest;

            testRunner(`TC_AGENTS_${tc.id.split('_')[2]} - ${tc.title}`, async ({ agentsService }) => {
                if (tc.category === 'Auth') {
                    // For Auth test, create a new context without auth headers
                    const apiContext = await request.newContext({ baseURL: ConfigManager.get('baseUrl') });
                    const response = await apiContext.post('/agents', { data: tc.request.payload });
                    expect(response.status()).toBe(tc.expected.status_code);
                    const body = await response.json();
                    expect(body.status).toBe('ERROR');
                    // TODO: Confirm actual error message and add assertion
                } else if (tc.category === 'Idempotency') {
                    // First call to create the agent
                    const firstResponse = await agentsService.createRaw(tc.request.payload, 201);
                    expect(firstResponse.status).toBe('SUCCESS');

                    // Second call with the same payload
                    await agentsService.createRaw(tc.request.payload, tc.expected.status_code);
                } else {
                    // For all other categories, use the appropriate service method
                    if (tc.category === 'Functional' || tc.category === 'ResponseContract') {
                        await agentsService.createRaw(tc.request.payload, tc.expected.status_code);
                    } else {
                        // Negative, Boundary, Validation tests use createRaw
                        await agentsService.createRaw(tc.request.payload, tc.expected.status_code);
                    }
                }
            });
        }
    });
});
