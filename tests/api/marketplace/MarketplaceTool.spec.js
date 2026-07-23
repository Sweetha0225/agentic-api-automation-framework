// Implements: Marketplace - Marketplace Tool
const { test, expect } = require('../../fixtures/marketplace.fixture');

test.describe('Marketplace - Tool API', () => {
    test('Verify Marketplace Tool API', async ({ marketplaceService }) => {
        const response = await marketplaceService.getMarketplaceTool();
        expect(response.status).toBe('SUCCESS');
    });
});