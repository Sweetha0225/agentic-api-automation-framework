const { expect } = require('@playwright/test');
const BaseValidator = require('../../core/base/BaseValidator');

class WorkflowsValidator extends BaseValidator {
    async validateCreate(response) {
        const body = await this.validateSuccessResponse(response, 200);
        this.validateProperty(body, 'data');
        expect(body.data.message).toBe('Workflow created successfully');
        expect(typeof body.data.id).toBe('number');
        expect(body.data.id).toBeGreaterThan(0);
        return body;
    }

    async validateUpdate(response) {
        const body = await this.validateSuccessResponse(response, 200);
        this.validateProperty(body, 'data');
        expect(typeof body.data.id).toBe('number');
        // The expected message contains the new ID, so we construct it for validation.
        const expectedMessage = `New workflow Id:${body.data.id} Inserted for update as you are updating first time after Approval`;
        expect(body.data.message).toBe(expectedMessage);
        return body;
    }

    async validateDelete(response, name) {
        const body = await this.validateSuccessResponse(response, 200);
        this.validateProperty(body, 'data');
        const expectedMessage = `WorkFlow ${name} deleted successfully`;
        expect(body.data.message).toBe(expectedMessage);
        return body;
    }
}

module.exports = new WorkflowsValidator();