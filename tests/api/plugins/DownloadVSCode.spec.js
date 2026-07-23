// Implements: Plugins - downloadVSCode
const { test } = require('../../fixtures/plugins.fixture');

test.describe('Plugins - Download VSCode API', () => {
    test('Validate Download VSCode Plugin API', async ({ pluginsService }) => {
        await pluginsService.downloadVSCode();
    });
});
