const { expect } = require('@playwright/test');

class WorkflowsValidator {
  validateCreateWorkflowResponse(response, expectedStatusCode = 200) {
    expect(response.status()).toBe(expectedStatusCode);
    const json = response.json();
    expect(json).toHaveProperty('status', 'SUCCESS');
    expect(json).toHaveProperty('data.message', 'Workflow created successfully');
    expect(typeof json.data.id).toBe('number');
  }

  validateUpdateWorkflowResponse(response, id, expectedStatusCode = 200) {
    expect(response.status()).toBe(expectedStatusCode);
    const json = response.json();
    expect(json).toHaveProperty('status', 'SUCCESS');
    expect(json).toHaveProperty('data.message', `New workflow Id:${id} Inserted for update as you are updating first time after Approval`);
    expect(typeof json.data.id).toBe('number');
  }

  validateDeleteWorkflowResponse(response, name, expectedStatusCode = 200) {
    expect(response.status()).toBe(expectedStatusCode);
    const json = response.json();
    expect(json).toHaveProperty('status', 'SUCCESS');
    expect(json).toHaveProperty('data.message', `WorkFlow ${name} deleted successfully`);
  }
}

module.exports = new WorkflowsValidator();
