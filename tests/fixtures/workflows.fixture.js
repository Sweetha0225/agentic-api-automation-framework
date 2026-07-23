const base = require('@playwright/test');
const WorkflowsService = require('../../src/services/WorkflowsService');
const WorkflowsEntityManager = require('../../src/managers/WorkflowsEntityManager');

const workflowsTest = base.test.extend({
  workflowsService: async ({ request }, use) => {
    await use(new WorkflowsService(request));
  },
  workflowsEntityManager: async ({ request }, use) => {
    const entityManager = new WorkflowsEntityManager(request);
    await use(entityManager);
    await entityManager.cleanup();
  }
});

module.exports = workflowsTest;
