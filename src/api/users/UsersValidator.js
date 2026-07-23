const { expect } = require('@playwright/test');
const BaseValidator = require('../../core/base/BaseValidator');

class UsersValidator extends BaseValidator {
    /**
     * Validates the response for the getByEmail action.
     * @param {APIResponse} response - The Playwright API response object.
     * @param {string} requestedEmail - The email that was requested.
     */
    async validateGetByEmail(response, requestedEmail) {
        const body = await this.validateSuccessResponse(response, 200);

        this.validateProperty(body, 'data');
        const { data } = body;

        // Validate pagination fields
        this.validateProperty(data, 'page');
        this.validateProperty(data, 'size');
        this.validateProperty(data, 'totalElements');
        this.validateProperty(data, 'totalPages');
        expect(typeof data.page).toBe('number');
        expect(typeof data.size).toBe('number');
        expect(typeof data.totalElements).toBe('number');
        expect(typeof data.totalPages).toBe('number');

        // Validate users array and its content
        this.validateProperty(data, 'users');
        this.validateArray(data.users);
        expect(data.users.length).toBeGreaterThan(0);

        const user = data.users[0];

        // Validate that the correct user was returned
        expect(user.email).toBe(requestedEmail);

        // Validate the shape of the user object
        this.validateUserShape(user);

        return body;
    }

    /**
     * Validates the structure of a single user object.
     * @param {object} user - The user object from the response.
     */
    validateUserShape(user) {
        const userFields = ['userId', 'email', 'username', 'image', 'authorizedBy', 'isEnabled', 'addedOn', 'lastLoggedIn', 'department', 'action', 'hierarchies', 'hierarchyCount', 'studios'];
        userFields.forEach(field => this.validateProperty(user, field));

        expect(typeof user.userId).toBe('number');
        expect(typeof user.email).toBe('string');
        expect(typeof user.username).toBe('string');
        expect(typeof user.isEnabled).toBe('boolean');
        expect(typeof user.addedOn).toBe('string');
        expect(typeof user.lastLoggedIn).toBe('string');
        expect(typeof user.hierarchyCount).toBe('number');

        // Validate structure of nested arrays
        this.validateArray(user.hierarchies);
        if (user.hierarchies.length > 0) {
            const hierarchy = user.hierarchies[0];
            this.validateProperty(hierarchy, 'level');
            this.validateProperty(hierarchy, 'entityId');
            this.validateProperty(hierarchy, 'entityName');
        }

        this.validateArray(user.studios);
        if (user.studios.length > 0) {
            const studio = user.studios[0];
            this.validateProperty(studio, 'studioId');
            this.validateProperty(studio, 'studioName');
        }
    }
}

module.exports = new UsersValidator();
