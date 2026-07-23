// Implements: Discover - discoverWorkflowFilter
const { test, expect } = require('../../fixtures/discover.fixture');

test.describe('Discover - Filter API', () => {
    test('Validate Discover Workflow Filter API', async ({ discoverService }) => {
        const body = await discoverService.discoverWorkflowFilter();
        expect(body.status).toBe('SUCCESS');
    });
});