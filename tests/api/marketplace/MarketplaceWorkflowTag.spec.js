// Implements: Marketplace - Marketplace Workflow Tag
const { test, expect } = require('../../fixtures/marketplace.fixture');

test.describe('Marketplace - Workflow Tag API', () => {
    test('Verify Marketplace Workflow Tag API', async ({ marketplaceService }) => {
        const response = await marketplaceService.getMarketplaceWorkflowTag();
        expect(response.status).toBe('SUCCESS');
    });
}