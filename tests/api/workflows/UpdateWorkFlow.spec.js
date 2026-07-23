// Implements: WorkFlow - update
const { test, expect } = require('../../fixtures/workflows.fixture');

test.describe('WorkFlow - Update API', () => {
    test('Validate Update WorkFlow API', async ({ workflowsService }) => {
        // 1. Create a workflow to get a valid ID for updating.
        const createResponse = await workflowsService.create();
        const originalId = createResponse.data.id;

        // 2. Update the created workflow.
        const updateResponse = await workflowsService.update(originalId);
        const newId = updateResponse.data.id;

        // 3. Validate the response.
        expect(newId).toBeDefined();
        expect(typeof newId).toBe('number');
        expect(newId).not.toBe(originalId); // Per spec, a new ID is returned.
        expect(updateResponse.status).toBe('SUCCESS');
    });
});