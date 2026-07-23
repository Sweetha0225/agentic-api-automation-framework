const base = require('@playwright/test');
const KnowledgeBaseEntityManager = require('../../src/entity-managers/knowledgebase/KnowledgeBaseEntityManager');

const fixtures = base.test.extend({
  knowledgeBaseEntityManager: async ({ authManager }, use) => {
    const manager = new KnowledgeBaseEntityManager(authManager);
    await use(manager);
    // No cleanup logic is available in the manager as the spec lacks a DELETE action.
  },
});

module.exports = { test: fixtures };
