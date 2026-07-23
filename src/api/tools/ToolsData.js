const baseDataFactory = require('../../core/data/BaseDataFactory');

class ToolsData {
    generateName() {
        return baseDataFactory.generateName('Tool');
    }
}

module.exports = new ToolsData();