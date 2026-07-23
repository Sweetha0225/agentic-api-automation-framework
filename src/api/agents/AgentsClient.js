const BaseApiClient = require('../clients/BaseApiClient');
const Endpoints = require('./AgentsEndpoints');

class AgentsClient {

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
     * Create Agent
     * @param {Object} payload
     */
    async create(payload) {
        if (!payload) {
            throw new Error('Create payload is required.');
        }
        return await this.client.post(Endpoints.CREATE, payload);
    }
}

module.exports = new AgentsClient();
