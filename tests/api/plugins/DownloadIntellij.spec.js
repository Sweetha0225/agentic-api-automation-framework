// Implements: Plugins - downloadIntellij
const { test } = require('../../fixtures/plugins.fixture');

test.describe('Plugins - Download Intellij API', () => {
    test('Validate Download Intellij Plugin API', async ({ pluginsService }) => {
        await pluginsService.downloadIntellij();
    });
});
