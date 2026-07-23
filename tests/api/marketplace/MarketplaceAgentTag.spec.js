// Implements: Marketplace - Marketplace Agent Tag
const { test, expect } = require('../../fixtures/marketplace.fixture');

test.describe('Marketplace - Agent Tag API', () => {
    test('Verify Marketplace Agent Tag API', async ({ marketplaceService }) => {
        const response = await marketplaceService.getMarketplaceAgentTag();
        expect(response.status).toBe('SUCCESS');
    });
});