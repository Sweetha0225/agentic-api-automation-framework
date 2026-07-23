const BaseEntityManager = require('./BaseEntityManager');
const WorkflowsService = require('../services/WorkflowsService');

class WorkflowsEntityManager extends BaseEntityManager {
  constructor(request) {
    super();
    this.service = new WorkflowsService(request);
    this.workflows = [];
  }

  async createWorkflow(payload) {
    const response = await this.service.createWorkflow(payload);
    const workflow = { ...payload, id: response.data.id };
    this.workflows.push(workflow);
    return workflow;
  }

  async cleanup() {
    await Promise.all(this.workflows.map(workflow => this.service.deleteWorkflow(workflow.id, workflow.name).catch(e => console.error(`Failed to delete workflow ${workflow.id}:`, e))));
    this.workflows = [];
  }
}

module.exports = WorkflowsEntityManager;
