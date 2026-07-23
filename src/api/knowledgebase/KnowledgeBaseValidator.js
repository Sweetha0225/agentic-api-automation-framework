const { expect } = require('@playwright/test');
const BaseValidator = require('../../core/base/BaseValidator');

class KnowledgeBaseValidator extends BaseValidator {
    async validateCreate(response) {
        const body = await this.validateSuccessResponse(response, 200);
        this.validateProperty(body, 'data');
        expect(body.data.message).toBe('Files uploaded and processed');
        this.validateProperty(body.data, 'id');
        this.validateProperty(body.data, 'kbDetail');
        expect(typeof body.data.id).toBe('number');
        expect(body.data.id).toBeGreaterThan(0);
        return body;
    }

    async validateGetAll(response) {
        const body = await this.validateSuccessResponse(response, 200);
        this.validateProperty(body, 'data');
        this.validateProperty(body.data, 'collections');
        this.validateArray(body.data.collections);
        return body;
    }

    async validateReview(response, id) {
        const body = await this.validateSuccessResponse(response, 200);
        this.validateProperty(body, 'data');
        expect(body.data.message).toBe('Knowledgebase status updated to IN_REVIEW successfully');
        expect(body.data.id).toBe(id);
        return body;
    }

    async validateApprove(response) {
        const body = await this.validateSuccessResponse(response, 200);
        this.validateProperty(body, 'data');
        expect(body.data.message).toBe('Knowledgebase approved successfully.');
        return body;
    }

    async validateDelete(response, name) {
        const body = await this.validateSuccessResponse(response, 200);
        this.validateProperty(body, 'data');
        expect(body.data.message).toBe(`Knowledgebase '${name}' deleted successfully`);
        return body;
    }
}

module.exports = new KnowledgeBaseValidator();
