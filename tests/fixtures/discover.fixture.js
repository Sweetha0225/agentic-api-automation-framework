const base = require('@playwright/test');
const discoverService = require('../../src/services/DiscoverService');

exports.test = base.test.extend({
    discoverService: async ({}, use) => {
        await discoverService.initialize();
        await use(discoverService);
        await discoverService.dispose();
    }
});

exports.expect = base.expect;