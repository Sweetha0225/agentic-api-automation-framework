// Implements: Plugins - downloadAndroidStudio
const { test } = require('../../fixtures/plugins.fixture');

test.describe('Plugins - Download AndroidStudio API', () => {
    test('Validate Download AndroidStudio Plugin API', async ({ pluginsService }) => {
        await pluginsService.downloadAndroidStudio();
    });
});
