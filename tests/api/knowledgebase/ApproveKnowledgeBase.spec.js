// Implements: KnowledgeBase - approve
const { test, expect } = require('../../fixtures/knowledgebase.fixture');

test.describe('KnowledgeBase - Approve API', () => {
    test('Validate Approve KnowledgeBase API', async ({ knowledgeBaseService }) => {
        // 1. Create a knowledge base to get a valid ID
        const { id } = await knowledgeBaseService.create();

        // 2. Approve the created knowledge base
        const approveResponse = await knowledgeBaseService.approve(id);
        expect(approveResponse.status).toBe('SUCCESS');
    });
});
