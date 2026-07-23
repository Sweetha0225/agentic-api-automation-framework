// Implements: Marketplace - Marketplace Knowledgebase Tag
const { test, expect } = require('../../fixtures/marketplace.fixture');

test.describe('Marketplace - Knowledgebase Tag API', () => {
    test('Verify Marketplace Knowledgebase Tag API', async ({ marketplaceService }) => {
        const response = await marketplaceService.getMarketplaceKnowledgebaseTag();
        expect(response.status).toBe('SUCCESS');
    });
});