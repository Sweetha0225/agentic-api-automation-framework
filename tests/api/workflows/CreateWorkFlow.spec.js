// Implements: WorkFlow - create
const { test, expect } = require('../../fixtures/workflows.fixture');

test.describe('WorkFlow - Create API', () => {
    test('Validate Create WorkFlow API', async ({ workflowsService }) => {
        const response = await workflowsService.create();
        expect(response.data).toBeDefined();
        expect(response.data.id).toBeGreaterThan(0);
        expect(response.status).toBe('SUCCESS');
    });
});