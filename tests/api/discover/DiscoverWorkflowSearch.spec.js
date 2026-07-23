// Implements: Discover - discoverWorkflowSearch
const { test, expect } = require('../../fixtures/discover.fixture');

test.describe('Discover - Search API', () => {
    test('Validate Discover Workflow Search API', async ({ discoverService }) => {
        const body = await discoverService.discoverWorkflowSearch();
        expect(body.status).toBe('SUCCESS');
    });
});