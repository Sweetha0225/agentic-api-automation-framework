const base = require('@playwright/test');
const workflowsService = require('../../src/services/WorkflowsService');
const workflowsEntityManager = require('../../src/managers/WorkflowsEntityManager');

exports.test = base.test.extend({
    workflowsService: async ({}, use) => {
        await workflowsService.initialize();
        await use(workflowsService);
        await workflowsService.dispose();
    },
    workflowsEntityManager: async ({}, use) => {
        await use(workflowsEntityManager);
        // Cleanup runs after the test that uses this fixture is complete.
        await workflowsEntityManager.cleanup();
    }
});

exports.expect = base.expect;
