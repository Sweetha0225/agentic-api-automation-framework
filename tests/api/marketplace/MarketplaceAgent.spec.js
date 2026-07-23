// Implements: Marketplace - Marketplace Agent
const { test, expect } = require('../../fixtures/marketplace.fixture');

test.describe('Marketplace - Agent API', () => {
    test('Verify Marketplace Agent API', async ({ marketplaceService }) => {
        const response = await marketplaceService.getMarketplaceAgent();
        expect(response.status).toBe('SUCCESS');
    });
});