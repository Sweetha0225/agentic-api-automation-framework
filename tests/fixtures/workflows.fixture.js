const base = require('@playwright/test');
const workflowsService = require('../../src/services/WorkflowsService');

exports.test = base.test.extend({
    workflowsService: async ({}, use) => {
        await workflowsService.initialize();
        await use(workflowsService);
        await workflowsService.dispose();
    }
});

exports.expect = base.expect;