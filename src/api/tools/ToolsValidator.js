const { expect } = require('@playwright/test');
const BaseValidator = require('../../core/base/BaseValidator');

class ToolsValidator extends BaseValidator {
    async validateCreate(response) {
        const body = await this.validateSuccessResponse(response, 200);
        this.validateProperty(body, 'data');
        expect(body.data.message).toBe('Tool created successfully');
        expect(typeof body.data.toolId).toBe('number');
        return body;
    }

    async validateUpdate(response, id) {
        const body = await this.validateSuccessResponse(response, 200);
        this.validateProperty(body, 'data');
        expect(body.data.message).toBe(`tool Id:${id} Updated successfully`);
        expect(body.data.toolId).toBe(id);
        return body;
    }

    async validateReview(response, id) {
        const body = await this.validateSuccessResponse(response, 200);
        this.validateProperty(body, 'data');
        expect(body.data.message).toBe('tool status updated to IN_REVIEW successfully');
        expect(body.data.toolId).toBe(id);
        return body;
    }

    async validateApprove(response) {
        const body = await this.validateSuccessResponse(response, 200);
        this.validateProperty(body, 'data');
        expect(body.data.message).toBe('Tool approved successfully.');
        expect(body.data).not.toHaveProperty('toolId');
        return body;
    }

    async validateGetAll(response) {
        const body = await this.validateSuccessResponse(response, 200);
        this.validateProperty(body, 'data');
        this.validateProperty(body.data, 'userToolDetails');
        this.validateProperty(body.data, 'totalNoOfRecords');
        this.validateArray(body.data.userToolDetails);
        expect(typeof body.data.totalNoOfRecords).toBe('number');
        return body;
    }

    async validateDelete(response, toolName) {
        const body = await this.validateSuccessResponse(response, 200);
        this.validateProperty(body, 'data');
        expect(body.data.message).toBe(`User Tool ${toolName} deleted successfully`);
        expect(body.data).not.toHaveProperty('toolId');
        return body;
    }
}

module.exports = new ToolsValidator();