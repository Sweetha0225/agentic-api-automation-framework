// Implements: Agents - review
const { test, expect } = require('../../fixtures/agents.fixture');

test.describe('Agents - Review API', () => {
    test('Validate Review Agents API', async ({ agentsService }) => {
        // 1. Create an agent to get a valid ID
        const createResponse = await agentsService.create();
        const agentId = createResponse.data.agentId;

        // 2. Send the agent for review
        const reviewResponse = await agentsService.review(agentId);
        expect(reviewResponse.data.agentId).toBe(agentId);
    });
});