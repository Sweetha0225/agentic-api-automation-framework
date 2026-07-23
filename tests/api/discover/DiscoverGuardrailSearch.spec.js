// Implements: Discover - discoverGuardrailSearch
const { test, expect } = require('../../fixtures/discover.fixture');

test.describe('Discover - Search API', () => {
    test('Validate Discover Guardrail Search API', async ({ discoverService }) => {
        const body = await discoverService.discoverGuardrailSearch();
        expect(body.status).toBe('SUCCESS');
    });
});