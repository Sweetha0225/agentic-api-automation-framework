const base = require('@playwright/test');
const marketplaceService = require('../../src/services/MarketplaceService');

exports.test = base.test.extend({
    marketplaceService: async ({}, use) => {
        await marketplaceService.initialize();
        await use(marketplaceService);
        await marketplaceService.dispose();
    }
});

exports.expect = base.expect;