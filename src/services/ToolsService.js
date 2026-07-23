const BaseService = require('./BaseService');
const client = require('../api/tools/ToolsClient');
const validator = require('../api/tools/ToolsValidator');
const payloads = require('../api/tools/ToolsPayloads');
const ToolsData = require('../api/tools/ToolsData');

class ToolsService extends BaseService {
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
            toolName: ToolsData.generateName(),
            ...overrides
        });
        const response = await this.client.update(payload);
        const body = await validator.validateUpdate(response, id);
        return { ...body, payload };
    }

    async review(id) {
        const response = await this.client.review(id);
        return await validator.validateReview(response, id);
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

    async delete(id, toolName) {
        const response = await this.client.delete(id);
        return await validator.validateDelete(response, toolName);
    }
}

module.exports = new ToolsService();