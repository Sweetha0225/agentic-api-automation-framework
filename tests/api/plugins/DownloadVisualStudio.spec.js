// Implements: Plugins - downloadVisualStudio
const { test } = require('../../fixtures/plugins.fixture');

test.describe('Plugins - Download VisualStudio API', () => {
    test('Validate Download VisualStudio Plugin API', async ({ pluginsService }) => {
        await pluginsService.downloadVisualStudio();
    });
});
