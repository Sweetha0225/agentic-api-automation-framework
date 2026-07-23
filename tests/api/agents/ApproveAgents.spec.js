// Implements: Agents - approve
const { test, expect } = require('../../fixtures/agents.fixture');

test.describe('Agents - Approve API', () => {
    test('Validate Approve Agents API', async ({ agentsService }) => {
        // 1. Create an agent to get a valid ID
        const createResponse = await agentsService.create();
        const agentId = createResponse.data.agentId;

        // 2. Approve the created agent
        const approveResponse = await agentsService.approve(agentId);
        expect(approveResponse.status).toBe('SUCCESS');
        expect(approveResponse.data.message).toBe('Agent approved successfully.');
    });
});