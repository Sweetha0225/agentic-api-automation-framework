const baseDataFactory = require('../../core/data/BaseDataFactory');

class AgentsData {

    /**
     * Returns a unique agent name.
     */
    getUniqueName() {
        return baseDataFactory.generateName('Agent');
    }
}

module.exports = new AgentsData();
