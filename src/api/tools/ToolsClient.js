const BaseApiClient = require('../clients/BaseApiClient');
const Endpoints = require('./ToolsEndpoints');

class ToolsClient {
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
        const endpoint = `${Endpoints.REVIEW}?tool-id=${id}`;
        return await this.client.put(endpoint, {});
    }

    async approve(payload) {
        return await this.client.put(Endpoints.APPROVE, payload);
    }

    async getAll() {
        return await this.client.get(Endpoints.GET_ALL);
    }

    async delete(id) {
        const endpoint = Endpoints.DELETE.replace('{id}', id);
        return await this.client.delete(endpoint);
    }
}

module.exports = new ToolsClient();