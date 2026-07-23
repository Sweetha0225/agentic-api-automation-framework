const KnowledgeBaseData = require('./KnowledgeBaseData');

class KnowledgeBasePayloads {
  createPayload(overrides = {}) {
    const defaultPayload = {
      knowledgeBase: KnowledgeBaseData.generateName(),
      description: 'javacodetopython',
      'model-ref': 8,
      type: 'normal',
      splitSize: 5000,
    };
    // 'files' parameter is handled separately as a file stream in the client.
    return { ...defaultPayload, ...overrides };
  }
}

module.exports = new KnowledgeBasePayloads();
