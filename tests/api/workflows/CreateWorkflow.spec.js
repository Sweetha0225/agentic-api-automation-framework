// Implements: Workflows - create
const { test, expect } = require('../../fixtures/workflows.fixture');

test.describe('Workflows - Create API', () => {
    test('Validate Create Workflow API', async ({ workflowsService, workflowsEntityManager }) => {
        const response = await workflowsEntityManager.createWorkflow();
        expect(response.data).toBeDefined();
        expect(response.data.id).toBeGreaterThan(0);
        expect(response.data.message).toBe('Workflow created successfully');
    });
});
