const base = require('@playwright/test');
const toolsService = require('../../src/services/ToolsService');

exports.test = base.test.extend({
    toolsService: async ({}, use) => {
        await toolsService.initialize();
        await use(toolsService);
        await toolsService.dispose();
    }
});

exports.expect = base.expect;