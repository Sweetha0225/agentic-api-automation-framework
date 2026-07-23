const BaseService = require('./BaseService');
const client = require('../api/knowledgebase/KnowledgeBaseClient');
const validator = require('../api/knowledgebase/KnowledgeBaseValidator');
const payloads = require('../api/knowledgebase/KnowledgeBasePayloads');

class KnowledgeBaseService extends BaseService {
    constructor() {
        super(client);
    }

    async create(overrides = {}) {
        const payload = payloads.createPayload(overrides);
        const response = await this.client.create(payload);
        const body = await validator.validateCreate(response);
        return {
            id: body.data.kbDetail.id,
            name: body.data.kbDetail.collectionName,
            responseBody: body
        };
    }

    async getAll() {
        const response = await this.client.getAll();
        return await validator.validateGetAll(response);
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

    async delete(id, name) {
        const response = await this.client.delete(id);
        return await validator.validateDelete(response, name);
    }
}

module.exports = new KnowledgeBaseService();
