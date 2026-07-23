// Implements: Tools - getAll
const { test, expect } = require('../../fixtures/tools.fixture');

test.describe('Tools - Get All API', () => {
    test('Validate Get User Tool API', async ({ toolsService }) => {
        const { data } = await toolsService.getAll();
        expect(Array.isArray(data.userToolDetails)).toBe(true);
        expect(typeof data.totalNoOfRecords).toBe('number');
    });
});