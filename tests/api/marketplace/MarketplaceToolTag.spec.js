// Implements: Marketplace - Marketplace Tool Tag
const { test, expect } = require('../../fixtures/marketplace.fixture');

test.describe('Marketplace - Tool Tag API', () => {
    test('Verify Marketplace Tool Tag API', async ({ marketplaceService }) => {
        const response = await marketplaceService.getMarketplaceToolTag();
        expect(response.status).toBe('SUCCESS');
    });
});