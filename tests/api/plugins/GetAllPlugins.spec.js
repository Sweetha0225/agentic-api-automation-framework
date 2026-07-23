// Implements: Plugins - getAll
const { test, expect } = require('../../fixtures/plugins.fixture');

test.describe('Plugins - Get All API', () => {
    test('Validate Get All Plugins API', async ({ pluginsService }) => {
        const body = await pluginsService.getAll();
        expect(body.status).toBe('SUCCESS');
    });
});
