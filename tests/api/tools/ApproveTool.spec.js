// Implements: Tools - approve
const { test, expect } = require('../../fixtures/tools.fixture');

test.describe('Tools - Approve API', () => {
    test('Validate Approve Tool API', async ({ toolsService }) => {
        const createResponse = await toolsService.create();
        const toolId = createResponse.data.toolId;

        const approveResponse = await toolsService.approve(toolId);
        expect(approveResponse.status).toBe('SUCCESS');
    });
});