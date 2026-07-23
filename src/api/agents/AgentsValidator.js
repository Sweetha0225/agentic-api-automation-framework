const { expect } = require('@playwright/test');
const BaseValidator = require('../../core/base/BaseValidator');

class AgentsValidator extends BaseValidator {

    /**
     * Validates the response for getting all agents.
     * Handles both success and error scenarios based on expected status.
     * @param {object} response - The Playwright API response object.
     * @param {number} expectedStatus - The expected HTTP status code.
     */
    async validateGetAll(response, expectedStatus = 200) {
        if (expectedStatus === 200) {
            const body = await this.validateSuccessResponse(response, expectedStatus);
            this.validateProperty(body, 'data');
            const data = body.data;
            this.validateProperty(data, 'agentDetails');
            this.validateProperty(data, 'totalNoOfRecords');
            this.validateArray(data.agentDetails);
            expect(typeof data.totalNoOfRecords, 'totalNoOfRecords should be a number').toBe('number');
            return body;
        } else {
            const body = await this.validateErrorResponse(response, expectedStatus);
            return body;
        }
    }
}

module.exports = new AgentsValidator();
