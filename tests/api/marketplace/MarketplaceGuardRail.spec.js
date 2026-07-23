// Implements: Marketplace - Marketplace GuardRail
const { test, expect } = require('../../fixtures/marketplace.fixture');

test.describe('Marketplace - GuardRail API', () => {
    test('Verify Marketplace GuardRail API', async ({ marketplaceService }) => {
        const response = await marketplaceService.getMarketplaceGuardRail();
        expect(response.status).toBe('SUCCESS');
    });
});