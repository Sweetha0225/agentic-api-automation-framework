const BaseService = require('./BaseService');
const client = require('../api/agents/AgentsClient');
const validator = require('../api/agents/AgentsValidator');
const payloads = require('../api/agents/AgentsPayloads');
const AgentsData = require('../api/agents/AgentsData');

class AgentsService extends BaseService {
    constructor() {
        super(client);
    }

    async create(overrides = {}) {
        const payload = payloads.createPayload(overrides);
        const response = await this.client.create(payload);
        const body = await validator.validateCreate(response);
        return { ...body, payload };
    }

    async update(id, overrides = {}) {
        const payload = payloads.updatePayload(id, {
            name: AgentsData.generateName(), // Ensure name is updated as per spec
            ...overrides
        });
        const response = await this.client.update(payload);
        const body = await validator.validateUpdate(response, id);
        return { ...body, payload };
    }

    async review(id) {
        const response = await this.client.review(id);
        return await validator.validateReview(response);
    }

    async getReview() {
        const response = await this.client.getReview();
        return await validator.validateGetReview(response);
    }

    async approve(id) {
        const payload = payloads.approvePayload(id);
        const response = await this.client.approve(payload);
        return await validator.validateApprove(response);
    }

    async getAll() {
        const response = await this.client.getAll();
        return await validator.validateGetAll(response);
    }

    async getMetrics() {
        const response = await this.client.getMetrics();
        return await validator.validateGetMetrics(response);
    }

    async delete(id, name) {
        const response = await this.client.delete(id);
        return await validator.validateDelete(response, name);
    }
}

module.exports = new AgentsService();