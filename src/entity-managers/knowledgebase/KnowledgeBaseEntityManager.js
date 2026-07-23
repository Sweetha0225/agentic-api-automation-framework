const BaseEntityManager = require('../BaseEntityManager');
const KnowledgeBaseService = require('../../services/knowledgebase/KnowledgeBaseService');

class KnowledgeBaseEntityManager extends BaseEntityManager {
  constructor(authManager) {
    const service = new KnowledgeBaseService(authManager);
    super(service);
  }

  async createKnowledgeBase(filePath, payloadOverrides) {
    const response = await this.service.createKnowledgeBase(filePath, payloadOverrides);
    const knowledgeBaseId = response.data.id;

    // Note: The api_spec for this module does not include a DELETE action.
    // Entity cleanup for created knowledge bases is not possible at this time.
    // If a delete action is implemented, it should be registered here for cleanup.
    
    return { response, knowledgeBaseId };
  }
}

module.exports = KnowledgeBaseEntityManager;
