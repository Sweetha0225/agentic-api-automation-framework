const BaseDataFactory = require('../../../core/BaseDataFactory');

class KnowledgeBaseData {
  generateName() {
    // Using the spec's recommendation to generate a unique name.
    return BaseDataFactory.generateName('KB');
  }
}

module.exports = new KnowledgeBaseData();
