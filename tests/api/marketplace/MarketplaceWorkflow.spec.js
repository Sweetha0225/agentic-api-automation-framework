// Implements: Marketplace - Marketplace Workflow
const { test, expect } = require('../../fixtures/marketplace.fixture');

test.describe('Marketplace - Workflow API', () => {
    test('Verify Marketplace Workflow API', async ({ marketplaceService }) => {
        const response = await marketplaceService.getMarketplaceWorkflow();
        expect(response.status).toBe('SUCCESS');
    });
});