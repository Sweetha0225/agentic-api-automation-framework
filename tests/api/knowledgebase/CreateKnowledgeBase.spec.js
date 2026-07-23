// Implements: KnowledgeBase - create
const { test, expect } = require('../../fixtures/knowledgebase.fixture');

test.describe('KnowledgeBase - Create API', () => {
    test('Validate Create KnowledgeBase API', async ({ knowledgeBaseService }) => {
        const { id, name, responseBody } = await knowledgeBaseService.create();
        expect(id).toBeGreaterThan(0);
        expect(name).toBeDefined();
        expect(responseBody.status).toBe('SUCCESS');
    });
});
