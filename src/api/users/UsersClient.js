const BaseApiClient = require('../clients/BaseApiClient');
const Endpoints = require('./UsersEndpoints');

class UsersClient {
    constructor() {
        this.client = new BaseApiClient();
    }

    async initialize() {
        await this.client.initialize();
    }

    async dispose() {
        await this.client.dispose();
    }

    /**
     * Get Users by Email
     * @param {string} email - The user email to search for.
     */
    async getByEmail(email) {
        if (!email) {
            throw new Error('UserEmail is required.');
        }

        return await this.client.get(Endpoints.GET_BY_EMAIL, {
            params: {
                search: email,
                roleName: 'user',
                sudo: true
            }
        });
    }
}

module.exports = new UsersClient();
