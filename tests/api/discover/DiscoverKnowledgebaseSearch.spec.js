// Implements: Discover - discoverKnowledgebaseSearch
const { test, expect } = require('../../fixtures/discover.fixture');

test.describe('Discover - Search API', () => {
    test('Validate Discover Knowledgebase Search API', async ({ discoverService }) => {
        const body = await discoverService.discoverKnowledgebaseSearch();
        expect(body.status).toBe('SUCCESS');
    });
});