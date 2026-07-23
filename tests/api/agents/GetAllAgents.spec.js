// Implements: TC_AGENTS_001, TC_AGENTS_002, TC_AGENTS_003, TC_AGENTS_004, TC_AGENTS_005, TC_AGENTS_006
const { test, expect } = require('../../fixtures/agents.fixture');
const { request } = require('@playwright/test');
const ConfigManager = require('../../../src/core/config/ConfigManager');

test.describe('GET /agents', () => {

    test('TC_AGENTS_001 - Verify successful retrieval of a list with multiple agent records', async ({ agentsService }) => {
        // Precondition: At least two agent records exist in the database.
        const body = await agentsService.getAll();
        expect(body.data.agentDetails.length).toBeGreaterThan(1);
        expect(body.data.totalNoOfRecords).toBeGreaterThan(1);
    });

    test('TC_AGENTS_002 - Verify successful retrieval of a list with a single agent record', async ({ agentsService }) => {
        // Precondition: Exactly one agent record exists in the database.
        const body = await agentsService.getAll();
        expect(body.data.agentDetails.length).toBe(1);
        expect(body.data.totalNoOfRecords).toBe(1);
    });

    test('TC_AGENTS_003 - Verify successful retrieval of an empty list when no agent records exist', async ({ agentsService }) => {
        // Precondition: No agent records exist in the database.
        const body = await agentsService.getAll();
        expect(body.data.agentDetails.length).toBe(0);
        expect(body.data.totalNoOfRecords).toBe(0);
    });

    test('TC_AGENTS_004 - Verify API returns an error when called without an Authorization token', async () => {
        const apiContext = await request.newContext({ baseURL: ConfigManager.get('baseUrl') });
        const response = await apiContext.get('/agents');
        expect(response.status()).toBe(401);
        const body = await response.json();
        // TODO: confirm actual error message
        // expect(body.message).toContain('Unauthorized'); 
    });

    test('TC_AGENTS_005 - Verify response contract and data types for a successful response', async ({ agentsService }) => {
        // Precondition: At least one agent record exists in the database.
        const body = await agentsService.getAll();
        expect(body).toHaveProperty('data');
        expect(body).toHaveProperty('status');
        expect(body.data).toHaveProperty('agentDetails');
        expect(body.data).toHaveProperty('totalNoOfRecords');
        expect(Array.isArray(body.data.agentDetails)).toBe(true);
        expect(typeof body.data.totalNoOfRecords).toBe('number');

        if (body.data.agentDetails.length > 0) {
            const agent = body.data.agentDetails[0];
            expect(typeof agent.id).toBe('number');
            expect(typeof agent.name).toBe('string');
            expect(typeof agent.agentDetails).toBe('string');
            expect(typeof agent.role).toBe('string');
            expect(typeof agent.goal).toBe('string');
            expect(typeof agent.backstory).toBe('string');
            expect(typeof agent.description).toBe('string');
            expect(typeof agent.expectedOutput).toBe('string');
            expect(typeof agent.createdBy).toBe('string');
            expect(typeof agent.createdAt).toBe('string'); // TODO: Validate specific datetime format
            expect(typeof agent.modifiedAt).toBe('string'); // TODO: Validate specific datetime format
            expect(agent).toHaveProperty('approvedBy');
            expect(agent).toHaveProperty('approvedAt');
            expect(['DRAFTED', 'CREATED', 'IN_REVIEW', 'APPROVED']).toContain(agent.status);
            expect(typeof agent.isDeleted).toBe('boolean');
            expect(typeof agent.teamInfo).toBe('object');
            expect(typeof agent.teamInfo.teamId).toBe('number');
            expect(typeof agent.isEditable).toBe('boolean');
            expect(Array.isArray(agent.tags)).toBe(true);
            agent.tags.forEach(tag => expect(typeof tag).toBe('number'));
            expect(typeof agent.practiceArea).toBe('number');
            expect(typeof agent.hierarchyEntityId).toBe('number');
            expect(['APPLICATION', 'ORGANIZATION']).toContain(agent.hierarchyLevel);
            expect(typeof agent.hierarchyName).toBe('string');
            expect(typeof agent.parentId).toBe('number');
            expect(typeof agent.isGolden).toBe('boolean');
        }
    });

    test('TC_AGENTS_006 - Verify response field totalNoOfRecords matches the count of items in agentDetails array', async ({ agentsService }) => {
        const body = await agentsService.getAll();
        expect(body.data.totalNoOfRecords).toBe(body.data.agentDetails.length);
    });
});
