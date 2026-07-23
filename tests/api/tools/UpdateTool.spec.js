// Implements: Tools - update
const { test, expect } = require('../../fixtures/tools.fixture');

test.describe('Tools - Update API', () => {
    test('Validate Update Tool API', async ({ toolsService }) => {
        const createResponse = await toolsService.create();
        const toolId = createResponse.data.toolId;

        const updateResponse = await toolsService.update(toolId);
        expect(updateResponse.data.toolId).toBe(toolId);
    });
});