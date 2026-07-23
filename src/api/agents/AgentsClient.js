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
     * Get all Agents
     */
    async getAll() {
        return await this.client.get(Endpoints.GET_ALL);
    }
}

module.exports = new AgentsClient();
