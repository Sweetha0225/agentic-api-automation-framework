// Implements: Marketplace - Marketplace GuardRail Tag
const { test, expect } = require('../../fixtures/marketplace.fixture');

test.describe('Marketplace - GuardRail Tag API', () => {
    test('Verify Marketplace GuardRail Tag API', async ({ marketplaceService }) => {
        const response = await marketplaceService.getMarketplaceGuardRailTag();
        expect(response.status).toBe('SUCCESS');
    });
});