// Implements: Marketplace - Marketplace Plugin
const { test, expect } = require('../../fixtures/marketplace.fixture');

test.describe('Marketplace - Plugin API', () => {
    test('Verify Marketplace Plugin API', async ({ marketplaceService }) => {
        const response = await marketplaceService.getMarketplacePlugin();
        expect(response.status).toBe('SUCCESS');
    });
});