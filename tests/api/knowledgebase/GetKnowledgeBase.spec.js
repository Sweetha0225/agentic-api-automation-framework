// Implements: KnowledgeBase - get
const { test, expect } = require('../../fixtures/knowledgebase.fixture');

test.describe('KnowledgeBase - Get All API', () => {
    test('Validate Get All KnowledgeBases API', async ({ knowledgeBaseService }) => {
        // Create a KB to ensure the list is not empty
        await knowledgeBaseService.create();

        const { data } = await knowledgeBaseService.getAll();
        expect(Array.isArray(data.collections)).toBe(true);
        expect(data.collections.length).toBeGreaterThan(0);
        expect(typeof data.totalNoOfRecords).toBe('number');
    });
});
