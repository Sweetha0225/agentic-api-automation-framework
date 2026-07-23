// Implements: Discover - discoverAgentFilter
const { test, expect } = require('../../fixtures/discover.fixture');

test.describe('Discover - Filter API', () => {
    test('Validate Discover Agent Filter API', async ({ discoverService }) => {
        const body = await discoverService.discoverAgentFilter();
        expect(body.status).toBe('SUCCESS');
    });
});