// Implements: Discover - discoverToolFilter
const { test, expect } = require('../../fixtures/discover.fixture');

test.describe('Discover - Filter API', () => {
    test('Validate Discover Tool Filter API', async ({ discoverService }) => {
        const body = await discoverService.discoverToolFilter();
        expect(body.status).toBe('SUCCESS');
    });
});