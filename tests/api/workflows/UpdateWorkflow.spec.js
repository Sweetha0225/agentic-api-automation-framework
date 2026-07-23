// Implements: Workflows - update
const { test, expect } = require('../../fixtures/workflows.fixture');

test.describe('Workflows - Update API', () => {
    test('Validate Update Workflow API', async ({ workflowsService, workflowsEntityManager }) => {
        // 1. Create a workflow to get a valid ID for updating.
        const createResponse = await workflowsEntityManager.createWorkflow();
        const originalId = createResponse.data.id;

        // 2. Update the created workflow.
        const updateResponse = await workflowsService.update(originalId);
        const newId = updateResponse.data.id;

        // 3. Validate the response.
        expect(newId).toBeDefined();
        expect(typeof newId).toBe('number');
        expect(newId).not.toBe(originalId);

        // Register the new ID for cleanup since the original ID is now invalid.
        workflowsEntityManager.registerForCleanup({ id: newId, name: updateResponse.payload.name, isDeleted: false });
        // Mark original as 'deleted' in the manager context to avoid double cleanup attempts.
        const originalWorkflow = workflowsEntityManager.createdWorkflows.find(w => w.id === originalId);
        if(originalWorkflow) originalWorkflow.isDeleted = true;
    });
});
