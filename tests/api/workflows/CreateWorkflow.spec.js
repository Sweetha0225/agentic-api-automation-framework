// Implements: Workflows - create
const workflowsTest = require('../../fixtures/workflows.fixture');
const { test, expect } = require('@playwright/test');

test.describe('Workflows API', () => {
  test('Validate Create Workflow API', async ({ workflowsService }) => {
    const payload = workflowsService.getCreatePayload();
    const response = await workflowsService.createWorkflow(payload);

    expect(response.data).toBeDefined();
    expect(response.data.id).toBeDefined();
    expect(response.data.message).toBe('Workflow created successfully');
  });
});
