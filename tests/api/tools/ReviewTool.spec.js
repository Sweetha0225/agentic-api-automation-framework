// Implements: Tools - review
const { test, expect } = require('../../fixtures/tools.fixture');

test.describe('Tools - Review API', () => {
    test('Validate Review Tool API', async ({ toolsService }) => {
        const createResponse = await toolsService.create();
        const toolId = createResponse.data.toolId;

        const reviewResponse = await toolsService.review(toolId);
        expect(reviewResponse.data.toolId).toBe(toolId);
    });
});