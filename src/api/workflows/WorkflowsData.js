const baseDataFactory = require('../../core/data/BaseDataFactory');

class WorkflowsData {
    /**
     * Returns a unique workflow name.
     */
    generateName() {
        return baseDataFactory.generateName('WorkFlow');
    }
}

module.exports = new WorkflowsData();