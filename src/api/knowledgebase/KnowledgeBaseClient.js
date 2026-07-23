const BaseApiClient = require('../clients/BaseApiClient');
const Endpoints = require('./KnowledgeBaseEndpoints');

class KnowledgeBaseClient {
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
        // Special handling for multipart/form-data
        return await this.client.apiContext.post(Endpoints.CREATE, {
            multipart: {
                files: {
                    name: payload.fileName,
                    mimeType: 'text/plain',
                    buffer: payload.fileBuffer
                },
                knowledgeBase: payload.knowledgeBase,
                description: payload.description,
                'model-ref': payload['model-ref'],
                type: payload.type,
                splitSize: payload.splitSize,
                practiceArea: payload.practiceArea,
                teamId: payload.teamId,
                status: payload.status,
                goodAt: payload.goodAt,
                hierarchyEntityId: payload.hierarchyEntityId,
                hierarchyLevel: payload.hierarchyLevel
            }
        });
    }

    async getAll() {
        return await this.client.get(Endpoints.GET_ALL);
    }

    async review(id) {
        const endpoint = `${Endpoints.REVIEW}?collection_id=${id}`;
        return await this.client.put(endpoint, {});
    }

    async approve(payload) {
        return await this.client.put(Endpoints.APPROVE, payload);
    }

    async delete(id) {
        const endpoint = Endpoints.DELETE.replace('{id}', id);
        return await this.client.delete(endpoint);
    }
}

module.exports = new KnowledgeBaseClient();
