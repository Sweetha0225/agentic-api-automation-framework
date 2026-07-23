const BaseService = require('../BaseService');
const client = require('../../api/users/UsersClient');
const validator = require('../../api/users/UsersValidator');

class UsersService extends BaseService {
    constructor() {
        super(client);
    }

    /**
     * Gets a user by email and validates the response.
     * @param {string} email - The email of the user to retrieve.
     * @returns {Promise<object>} The validated response body.
     */
    async getByEmail(email) {
        const response = await this.client.getByEmail(email);
        return await validator.validateGetByEmail(response, email);
    }
}

module.exports = new UsersService();
