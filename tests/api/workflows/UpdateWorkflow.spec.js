// Implements: Workflows - update
const workflowsTest = require('../../fixtures/workflows.fixture');
const { test, expect } = require('@playwright/test');
const WorkflowsData = require('../../../src/data/workflows/WorkflowsData');

test.describe('Workflows API', () => {
  test('Validate Update Workflow API', async ({ workflowsService, workflowsEntityManager }) => {
    // Precondition: Create a workflow to update
    const createPayload = workflowsService.getCreatePayload();
    const createdWorkflow = await workflowsEntityManager.createWorkflow(createPayload);

    // Action: Update the workflow
    const newName = WorkflowsData.generateWorkflowName();
    const updatePayload = workflowsService.getUpdatePayload(createdWorkflow.id, newName);
    const response = await workflowsService.updateWorkflow(updatePayload);

    // Validation
    expect(response.data).toBeDefined();
    expect(response.data.id).toBeDefined();
    expect(response.data.id).not.toBe(createdWorkflow.id);
    expect(response.data.message).toContain('Inserted for update');
  });
});
