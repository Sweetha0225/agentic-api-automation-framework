// Implements: Tools - delete
const { test, expect } = require('../../fixtures/tools.fixture');

test.describe('Tools - Delete API', () => {
    test('Validate Delete Tool API', async ({ toolsService }) => {
        const createResponse = await toolsService.create();
        const toolId = createResponse.data.toolId;

        const updateResponse = await toolsService.update(toolId);
        const updatedToolName = updateResponse.payload.toolName;

        const deleteResponse = await toolsService.delete(toolId, updatedToolName);
        expect(deleteResponse.status).toBe('SUCCESS');
    });
});