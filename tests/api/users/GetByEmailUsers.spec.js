// Implements: Users - getByEmail
const { test, expect } = require('../../fixtures/users.fixture');
const UsersData = require('../../../src/api/users/UsersData');

test.describe('Users - Get By Email API', () => {
    test('Validate Get Users By Email API', async ({ usersService }) => {
        const userEmail = UsersData.getKnownUserEmail();
        const responseBody = await usersService.getByEmail(userEmail);

        expect(responseBody).toBeDefined();
        expect(responseBody.status).toBe('SUCCESS');
        expect(responseBody.data.users[0].email).toBe(userEmail);
    });
});
