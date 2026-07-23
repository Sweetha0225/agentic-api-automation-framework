// Implements: KnowledgeBase - delete
const { test, expect } = require('../../fixtures/knowledgebase.fixture');

test.describe('KnowledgeBase - Delete API', () => {
    test('Validate Delete KnowledgeBase API', async ({ knowledgeBaseService }) => {
        // 1. Create a knowledge base to get a valid ID and name
        const { id, name } = await knowledgeBaseService.create();

        // 2. Delete the knowledge base
        const deleteResponse = await knowledgeBaseService.delete(id, name);
        expect(deleteResponse.status).toBe('SUCCESS');
    });
});
