// Implements: Discover - discoverAgentSearch
const { test, expect } = require('../../fixtures/discover.fixture');

test.describe('Discover - Search API', () => {
    test('Validate Discover Agent Search API', async ({ discoverService }) => {
        const body = await discoverService.discoverAgentSearch();
        expect(body.status).toBe('SUCCESS');
    });
});