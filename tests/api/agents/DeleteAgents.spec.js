// Implements: Agents - delete
const { test, expect } = require('../../fixtures/agents.fixture');

test.describe('Agents - Delete API', () => {
    test('Validate Delete Agents API', async ({ agentsService }) => {
        // 1. Create an agent to get a valid ID and name
        const createResponse = await agentsService.create();
        const agentId = createResponse.data.agentId;

        // 2. Update the agent to get an 'updated name' as per spec note
        const updateResponse = await agentsService.update(agentId);
        const updatedName = updateResponse.payload.name;

        // 3. Delete the agent and validate with the updated name
        const deleteResponse = await agentsService.delete(agentId, updatedName);
        expect(deleteResponse.status).toBe('SUCCESS');
    });
});