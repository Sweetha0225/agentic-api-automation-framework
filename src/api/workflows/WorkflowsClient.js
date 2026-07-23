const BaseApiClient = require('../clients/BaseApiClient');
const Endpoints = require('./WorkflowsEndpoints');

class WorkflowsClient {
    constructor() {
        this.client = new BaseApiClient();
    }

    async initialize() {
        await this.client.initialize();
    }

    async dispose() {
        await this.client.dispose();
    }

    async create(payload) {
        return await this.client.post(Endpoints.CREATE, payload);
    }

    async update(payload) {
        return await this.client.put(Endpoints.UPDATE, payload);
    }

    async delete(id) {
        const endpoint = Endpoints.DELETE.replace('{id}', id);
        return await this.client.delete(endpoint);
    }
}

module.exports = new WorkflowsClient();