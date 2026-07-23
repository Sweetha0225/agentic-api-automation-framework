// Implements: Agents - create
const { test, expect } = require('../../fixtures/agents.fixture');

test.describe('Agents - Create API', () => {
    test('Validate Create Agents API', async ({ agentsService }) => {
        const { data } = await agentsService.create();
        expect(data).toBeDefined();
        expect(data.agentId).toBeGreaterThan(0);
    });
});