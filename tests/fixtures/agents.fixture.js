const base = require('@playwright/test');
const agentsService = require('../../src/services/AgentsService');

exports.test = base.test.extend({
    agentsService: async ({}, use) => {
        await agentsService.initialize();
        await use(agentsService);
        await agentsService.dispose();
    }
});

exports.expect = base.expect;