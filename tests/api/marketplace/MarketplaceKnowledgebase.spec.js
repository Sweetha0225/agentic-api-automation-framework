// Implements: Marketplace - Marketplace Knowledgebase
const { test, expect } = require('../../fixtures/marketplace.fixture');

test.describe('Marketplace - Knowledgebase API', () => {
    test('Verify Marketplace Knowledgebase API', async ({ marketplaceService }) => {
        const response = await marketplaceService.getMarketplaceKnowledgebase();
        expect(response.status).toBe('SUCCESS');
    });
});