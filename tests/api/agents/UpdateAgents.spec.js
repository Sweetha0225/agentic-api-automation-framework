// Implements: Agents - update
const { test, expect } = require('../../fixtures/agents.fixture');

test.describe('Agents - Update API', () => {
    test('Validate Update Agents API', async ({ agentsService }) => {
        // 1. Create an agent to get a valid ID
        const createResponse = await agentsService.create();
        const agentId = createResponse.data.agentId;

        // 2. Update the created agent
        const updateResponse = await agentsService.update(agentId, { description: 'Updated via automation' });
        expect(updateResponse.data.agentId).toBe(agentId);
    });
});