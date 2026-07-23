// Implements: Discover - discoverKnowledgebaseFilter
const { test, expect } = require('../../fixtures/discover.fixture');

test.describe('Discover - Filter API', () => {
    test('Validate Discover Knowledgebase Filter API', async ({ discoverService }) => {
        const body = await discoverService.discoverKnowledgebaseFilter();
        expect(body.status).toBe('SUCCESS');
    });
});