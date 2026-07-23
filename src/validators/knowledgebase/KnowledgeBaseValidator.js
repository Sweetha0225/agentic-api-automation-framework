const { expect } = require('@playwright/test');
const BaseValidator = require('../BaseValidator');

class KnowledgeBaseValidator extends BaseValidator {
  validateCreateResponse(response, responseBody) {
    this.validateStatusCode(response, 200);
    expect(responseBody.status, 'Expected response status to be SUCCESS').toBe('SUCCESS');
    expect(responseBody.data.message, 'Expected success message not found').toBe('Files uploaded and processed');
    expect(responseBody.data.isSuccessful, 'Expected isSuccessful to be true').toBe(true);
    expect(typeof responseBody.data.id, 'Expected data.id to be a number').toBe('number');
    expect(responseBody.data.id, 'Expected data.id to be greater than 0').toBeGreaterThan(0);
    expect(responseBody.data.kbDetail.status, 'Expected kbDetail.status to be CREATED').toBe('CREATED');
    expect(Array.isArray(responseBody.data.kbDetail.files), 'Expected kbDetail.files to be an array').toBe(true);
    expect(responseBody.data.kbDetail.files.length, 'Expected at least one file in kbDetail.files').toBeGreaterThan(0);
    expect(responseBody.data.kbDetail.files[0].status, 'Expected file status to be SUCCESS').toBe('SUCCESS');
  }
}

module.exports = KnowledgeBaseValidator;
