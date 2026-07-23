// Implements: KnowledgeBase - review
const { test, expect } = require('../../fixtures/knowledgebase.fixture');

test.describe('KnowledgeBase - Review API', () => {
    test('Validate Review KnowledgeBase API', async ({ knowledgeBaseService }) => {
        // 1. Create a knowledge base to get a valid ID
        const { id } = await knowledgeBaseService.create();

        // 2. Send the knowledge base for review
        const reviewResponse = await knowledgeBaseService.review(id);
        expect(reviewResponse.data.id).toBe(id);
    });
});
