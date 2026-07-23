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

    async create(payload) {
        return await this.client.post(Endpoints.CREATE, payload);
    }

    async update(payload) {
        return await this.client.put(Endpoints.UPDATE, payload);
    }

    async review(id) {
        const endpoint = `${Endpoints.REVIEW}?agent-id=${id}`;
        return await this.client.put(endpoint, {});
    }

    async getReview() {
        return await this.client.get(Endpoints.GET_REVIEW);
    }

    async approve(payload) {
        return await this.client.put(Endpoints.APPROVE, payload);
    }

    async getAll() {
        return await this.client.get(Endpoints.GET_ALL);
    }

    async getMetrics() {
        return await this.client.get(Endpoints.GET_METRICS);
    }

    async delete(id) {
        const endpoint = Endpoints.DELETE.replace('{id}', id);
        return await this.client.delete(endpoint);
    }
}

module.exports = new AgentsClient();