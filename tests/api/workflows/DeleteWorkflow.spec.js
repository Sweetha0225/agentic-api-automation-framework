// Implements: Workflows - delete
const { test, expect } = require('../../fixtures/workflows.fixture');

test.describe('Workflows - Delete API', () => {
    test('Validate Delete Workflow API', async ({ workflowsService, workflowsEntityManager }) => {
        // 1. Create a workflow.
        const createResponse = await workflowsEntityManager.createWorkflow();
        const originalId = createResponse.data.id;

        // 2. Update the workflow to get the new ID and name, as per spec notes.
        const updateResponse = await workflowsService.update(originalId);
        const idForDeletion = updateResponse.data.id;
        const updatedName = updateResponse.payload.name;

        // 3. Delete the workflow using the ID and name from the UPDATE response.
        const deleteResponse = await workflowsService.delete(idForDeletion, updatedName);
        expect(deleteResponse.status).toBe('SUCCESS');

        // 4. Mark entities in the manager as deleted to prevent cleanup attempts.
        const originalWorkflow = workflowsEntityManager.createdWorkflows.find(w => w.id === originalId);
        if(originalWorkflow) originalWorkflow.isDeleted = true;
        workflowsEntityManager.registerForCleanup({ id: idForDeletion, name: updatedName, isDeleted: true });
    });
});
