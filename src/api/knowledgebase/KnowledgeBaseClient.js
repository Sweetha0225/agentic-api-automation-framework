const fs = require('fs');
const BaseApiClient = require('../../clients/BaseApiClient');
const KnowledgeBaseEndpoints = require('./KnowledgeBaseEndpoints');

class KnowledgeBaseClient {
  constructor(authManager) {
    this.client = new BaseApiClient(authManager);
  }

  async create(payload, filePath) {
    const multipartPayload = {
      ...payload,
      files: fs.createReadStream(filePath),
    };

    // This implementation assumes the base client's post method can handle a 'multipart' 
    // option, which is a common pattern in Playwright for multipart/form-data requests.
    return this.client.post(
      KnowledgeBaseEndpoints.CREATE_KNOWLEDGEBASE,
      {
        multipart: multipartPayload,
      }
    );
  }
}

module.exports = KnowledgeBaseClient;
