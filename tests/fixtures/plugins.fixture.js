const base = require('@playwright/test');
const pluginsService = require('../../src/services/PluginsService');

exports.test = base.test.extend({
    pluginsService: async ({}, use) => {
        await pluginsService.initialize();
        await use(pluginsService);
        await pluginsService.dispose();
    }
});

exports.expect = base.expect;
