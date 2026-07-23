// Implements: Workflows - delete
const workflowsTest = require('../../fixtures/workflows.fixture');
const { test, expect } = require('@playwright/test');
const WorkflowsData = require('../../../src/data/workflows/WorkflowsData');

test.describe('Workflows API', () => {
  test('Validate Delete Workflow API', async ({ workflowsService, workflowsEntityManager }) => {
    // Precondition 1: Create a workflow
    const createPayload = workflowsService.getCreatePayload();
    const createdWorkflow = await workflowsEntityManager.createWorkflow(createPayload);

    // Precondition 2: Update the workflow to get the new ID for deletion, as per spec
    const newName = WorkflowsData.generateWorkflowName();
    const updatePayload = workflowsService.getUpdatePayload(createdWorkflow.id, newName);
    const updatedWorkflowResponse = await workflowsService.updateWorkflow(updatePayload);
    const idForDeletion = updatedWorkflowResponse.data.id;

    // Action: Delete the workflow
    const response = await workflowsService.deleteWorkflow(idForDeletion, newName);

    // Validation
    expect(response.data).toBeDefined();
    expect(response.data.message).toBe(`WorkFlow ${newName} deleted successfully`);
  });
});
