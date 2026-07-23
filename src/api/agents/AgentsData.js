const baseDataFactory = require('../../core/data/BaseDataFactory');

class AgentsData {
    /**
     * Returns a unique agent name.
     */
    generateName() {
        return baseDataFactory.generateName('Agent');
    }
}

module.exports = new AgentsData();