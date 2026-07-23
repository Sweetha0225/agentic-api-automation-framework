// Implements: Plugins - downloadEclipse
const { test } = require('../../fixtures/plugins.fixture');

test.describe('Plugins - Download Eclipse API', () => {
    test('Validate Download Eclipse Plugin API', async ({ pluginsService }) => {
        await pluginsService.downloadEclipse();
    });
});
