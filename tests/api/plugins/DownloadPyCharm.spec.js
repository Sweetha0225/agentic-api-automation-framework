// Implements: Plugins - downloadPyCharm
const { test } = require('../../fixtures/plugins.fixture');

test.describe('Plugins - Download PyCharm API', () => {
    test('Validate Download Pycharm Plugin API', async ({ pluginsService }) => {
        await pluginsService.downloadPyCharm();
    });
});
