// Implements: Agents - getAll
const { test, expect } = require('../../fixtures/agents.fixture');

test.describe('Agents - Get All API', () => {
    test('Validate Get Agents API', async ({ agentsService }) => {
        const { data } = await agentsService.getAll();
        expect(Array.isArray(data.agentDetails)).toBe(true);
        expect(typeof data.totalNoOfRecords).toBe('number');
    });
});