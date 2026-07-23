// Implements: Agents - getReview
const { test, expect } = require('../../fixtures/agents.fixture');

test.describe('Agents - Get Review API', () => {
    test('Validate Get Review Agents API', async ({ agentsService }) => {
        const response = await agentsService.getReview();
        expect(response).toBeDefined();
    });
});