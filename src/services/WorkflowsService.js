const BaseService = require('./BaseService');
const client = require('../api/workflows/WorkflowsClient');
const validator = require('../api/workflows/WorkflowsValidator');
const payloads = require('../api/workflows/WorkflowsPayloads');
const WorkflowsData = require('../api/workflows/WorkflowsData');

class WorkflowsService extends BaseService {
    constructor() {
        super(client);
    }

    async create(overrides = {}) {
        const payload = payloads.createPayload(overrides);
        const response = await this.client.create(payload);
        const body = await validator.validateCreate(response);
        // Return the full context for chaining: response body and the payload sent
        return { ...body, payload };
    }

    async update(id, overrides = {}) {
        // Per spec, generate an updated unique name for the update payload
        const payload = payloads.updatePayload(id, {
            name: WorkflowsData.generateName(),
            ...overrides
        });
        const response = await this.client.update(payload);
        const body = await validator.validateUpdate(response);
        return { ...body, payload };
    }

    async delete(id, name) {
        const response = await this.client.delete(id);
        return await validator.validateDelete(response, name);
    }
}

module.exports = new WorkflowsService();
