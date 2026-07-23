const { expect } = require('@playwright/test');
const BaseValidator = require('../../core/base/BaseValidator');

class AgentsValidator extends BaseValidator {

    /**
     * Validate Create Agent Response
     */
    async validateCreate(response, expectedStatus) {
        await this.validateStatusCode(response, expectedStatus);
        const body = await response.json();

        if (expectedStatus === 201) {
            expect(body.status, 'Response status should be SUCCESS for a successful creation').toBe('SUCCESS');
            this.validateProperty(body, 'data');
            const { data } = body;
            this.validateProperty(data, 'agentId');
            expect(typeof data.agentId, 'agentId should be an integer').toBe('number');
            expect(data.agentId, 'agentId should be greater than 0').toBeGreaterThan(0);
            this.validateProperty(data, 'message');
            expect(typeof data.message, 'message should be a string').toBe('string');
        } else {
            expect(body.status, `Response status should be ERROR for a ${expectedStatus} response`).toBe('ERROR');
            // TODO: Add specific error message validation once confirmed
            // this.validateProperty(body, 'message');
            // expect(body.message).toContain('<confirmed_error_message>');
        }

        return body;
    }
}

module.exports = new AgentsValidator();
