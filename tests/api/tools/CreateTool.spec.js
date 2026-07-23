// Implements: Tools - create
const { test, expect } = require('../../fixtures/tools.fixture');

test.describe('Tools - Create API', () => {
    test('Validate Create Tool API', async ({ toolsService }) => {
        const { data } = await toolsService.create();
        expect(data).toBeDefined();
        expect(data.toolId).toBeGreaterThan(0);
    });
});