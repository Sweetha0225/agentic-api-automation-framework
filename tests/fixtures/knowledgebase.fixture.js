const base = require('@playwright/test');
const knowledgeBaseService = require('../../src/services/KnowledgeBaseService');

exports.test = base.test.extend({
    knowledgeBaseService: async ({}, use) => {
        await knowledgeBaseService.initialize();
        await use(knowledgeBaseService);
        await knowledgeBaseService.dispose();
    }
});

exports.expect = base.expect;
