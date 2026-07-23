// Implements: Agents - getMetrics
const { test, expect } = require('../../fixtures/agents.fixture');

test.describe('Agents - Get Metrics API', () => {
    test('Validate Agent Metric API', async ({ agentsService }) => {
        const response = await agentsService.getMetrics();
        expect(response).toBeDefined();
        expect(response.status).toBe('SUCCESS');
    });
});