// Implements: Discover - discoverGuardrailFilter
const { test, expect } = require('../../fixtures/discover.fixture');

test.describe('Discover - Filter API', () => {
    test('Validate Discover Guardrail Filter API', async ({ discoverService }) => {
        const body = await discoverService.discoverGuardrailFilter();
        expect(body.status).toBe('SUCCESS');
    });
});