// Implements: WorkFlow - delete
const { test, expect } = require('../../fixtures/workflows.fixture');

test.describe('WorkFlow - Delete API', () => {
    test('Validate Delete WorkFlow API', async ({ workflowsService }) => {
        // 1. Create a workflow.
        const createResponse = await workflowsService.create();
        const originalId = createResponse.data.id;

        // 2. Update the workflow to get the new ID and name, as per spec notes.
        const updateResponse = await workflowsService.update(originalId);
        const idForDeletion = updateResponse.data.id;
        const nameForDeletion = updateResponse.payload.name;

        // 3. Delete the workflow using the ID and name from the UPDATE response.
        const deleteResponse = await workflowsService.delete(idForDeletion, nameForDeletion);
        expect(deleteResponse.status).toBe('SUCCESS');
    });
});