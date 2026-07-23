const BaseService = require('../BaseService');
const WorkflowsClient = require('../../api/workflows/WorkflowsClient');
const WorkflowsValidator = require('../../validators/WorkflowsValidator');
const WorkflowsPayloads = require('../../payloads/WorkflowsPayloads');

class WorkflowsService extends BaseService {
  constructor(request) {
    super(request);
    this.client = new WorkflowsClient(request);
  }

  async createWorkflow(payload) {
    const response = await this.client.createWorkflow(payload);
    WorkflowsValidator.validateCreateWorkflowResponse(response);
    return response.json();
  }

  async updateWorkflow(payload) {
    const response = await this.client.updateWorkflow(payload);
    const responseBody = await response.json();
    WorkflowsValidator.validateUpdateWorkflowResponse(response, responseBody.data.id);
    return responseBody;
  }

  async deleteWorkflow(id, name) {
    const response = await this.client.deleteWorkflow(id);
    WorkflowsValidator.validateDeleteWorkflowResponse(response, name);
    return response.json();
  }

  getCreatePayload(overrides) {
    return WorkflowsPayloads.createWorkflowPayload(overrides);
  }

  getUpdatePayload(id, name, overrides) {
    return WorkflowsPayloads.updateWorkflowPayload(id, name, overrides);
  }
}

module.exports = WorkflowsService;
