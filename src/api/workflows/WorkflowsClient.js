const BaseApiClient = require('../clients/BaseApiClient');
const WORKFLOWS_ENDPOINTS = require('./WorkflowsEndpoints');

class WorkflowsClient extends BaseApiClient {
  constructor(request) {
    super(request);
  }

  async createWorkflow(payload, options = {}) {
    return this.post(WORKFLOWS_ENDPOINTS.BASE_URL, payload, options);
  }

  async updateWorkflow(payload, options = {}) {
    return this.put(WORKFLOWS_ENDPOINTS.BASE_URL, payload, options);
  }

  async deleteWorkflow(id, options = {}) {
    return this.delete(WORKFLOWS_ENDPOINTS.GET_WORKFLOW_BY_ID(id), options);
  }
}

module.exports = WorkflowsClient;
