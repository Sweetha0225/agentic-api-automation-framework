const { expect } = require('@playwright/test');
const BaseValidator = require('../../core/base/BaseValidator');

class AgentsValidator extends BaseValidator {
    async validateCreate(response) {
        const body = await this.validateSuccessResponse(response, 200);
        this.validateProperty(body, 'data');
        expect(body.data.message).toBe('Agent created successfully');
        expect(typeof body.data.agentId).toBe('number');
        expect(body.data.agentId).toBeGreaterThan(0);
        return body;
    }

    async validateUpdate(response, id) {
        const body = await this.validateSuccessResponse(response, 200);
        this.validateProperty(body, 'data');
        expect(body.data.message).toBe(`Agent Id:${id} Updated successfully`);
        expect(body.data.agentId).toBe(id);
        return body;
    }

    async validateReview(response) {
        const body = await this.validateSuccessResponse(response, 200);
        this.validateProperty(body, 'data');
        expect(body.data.message).toBe('Agent status updated to IN_REVIEW successfully');
        expect(typeof body.data.agentId).toBe('number');
        return body;
    }

    async validateGetReview(response) {
        this.validateStatusCode(response, 200);
        const body = await response.json();
        // TODO: confirm response shape
        return body;
    }

    async validateApprove(response) {
        const body = await this.validateSuccessResponse(response, 200);
        this.validateProperty(body, 'data');
        expect(body.data.message).toBe('Agent approved successfully.');
        expect(body.data).not.toHaveProperty('agentId');
        return body;
    }

    async validateGetAll(response) {
        const body = await this.validateSuccessResponse(response, 200);
        this.validateProperty(body, 'data');
        this.validateProperty(body.data, 'agentDetails');
        this.validateProperty(body.data, 'totalNoOfRecords');
        this.validateArray(body.data.agentDetails);
        expect(typeof body.data.totalNoOfRecords).toBe('number');
        return body;
    }

    async validateGetMetrics(response) {
        const body = await this.validateSuccessResponse(response, 200);
        this.validateProperty(body, 'data');
        expect(body.data.message).toBe('Agents Metrics Retrieved Successfully');
        // TODO: confirm response shape for the data payload itself
        return body;
    }

    async validateDelete(response, name) {
        const body = await this.validateSuccessResponse(response, 200);
        this.validateProperty(body, 'data');
        expect(body.data.message).toBe(`Agent ${name} deleted successfully`);
        expect(body.data).not.toHaveProperty('agentId');
        return body;
    }
}

module.exports = new AgentsValidator();