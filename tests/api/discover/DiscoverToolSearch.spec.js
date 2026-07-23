// Implements: Discover - discoverToolSearch
const { test, expect } = require('../../fixtures/discover.fixture');

test.describe('Discover - Search API', () => {
    test('Validate Discover Tool Search API', async ({ discoverService }) => {
        const body = await discoverService.discoverToolSearch();
        expect(body.status).toBe('SUCCESS');
    });
});