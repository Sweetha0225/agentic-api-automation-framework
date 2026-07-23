const BaseService = require('../BaseService');
const KnowledgeBaseClient = require('../../api/knowledgebase/KnowledgeBaseClient');
const KnowledgeBasePayloads = require('../../data/knowledgebase/KnowledgeBasePayloads');
const KnowledgeBaseValidator = require('../../validators/knowledgebase/KnowledgeBaseValidator');

class KnowledgeBaseService extends BaseService {
  constructor(authManager) {
    const client = new KnowledgeBaseClient(authManager);
    super(client);
    this.payloads = KnowledgeBasePayloads;
    this.validator = new KnowledgeBaseValidator();
  }

  async createKnowledgeBase(filePath, payloadOverrides = {}) {
    const payload = this.payloads.createPayload(payloadOverrides);
    const response = await this.client.create(payload, filePath);
    const responseBody = await response.json();
    this.validator.validateCreateResponse(response, responseBody);
    return responseBody;
  }
}

module.exports = KnowledgeBaseService;
