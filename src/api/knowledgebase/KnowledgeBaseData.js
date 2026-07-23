const baseDataFactory = require('../../core/data/BaseDataFactory');

class KnowledgeBaseData {
    /**
     * Returns a unique knowledge base name.
     */
    generateName() {
        return baseDataFactory.generateName('TestKB');
    }
}

module.exports = new KnowledgeBaseData();
