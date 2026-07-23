const BaseDataFactory = require('../BaseDataFactory');

class WorkflowsData extends BaseDataFactory {
  constructor() {
    super();
  }

  generateWorkflowName() {
    return `Workflow_${this.getRandomString(8)}`;
  }
}

module.exports = new WorkflowsData();
