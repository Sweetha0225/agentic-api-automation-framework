const BaseValidator = require('../../core/base/BaseValidator');

class DiscoverValidator extends BaseValidator {
    async validateDiscoverAgentSearch(response) {
        const body = await this.validateSuccessResponse(response, 200);
        // Per notes, only validating status code and response status.
        return body;
    }

    async validateDiscoverWorkflowSearch(response) {
        const body = await this.validateSuccessResponse(response, 200);
        // Per notes, only validating status code and response status.
        return body;
    }

    async validateDiscoverToolSearch(response) {
        const body = await this.validateSuccessResponse(response, 200);
        // Per notes, only validating status code and response status.
        return body;
    }

    async validateDiscoverKnowledgebaseSearch(response) {
        const body = await this.validateSuccessResponse(response, 200);
        // Per notes, only validating status code and response status.
        return body;
    }

    async validateDiscoverGuardrailSearch(response) {
        const body = await this.validateSuccessResponse(response, 200);
        // Per notes, only validating status code and response status.
        return body;
    }

    async validateDiscoverAgentFilter(response) {
        const body = await this.validateSuccessResponse(response, 200);
        // Per notes, only validating status code and response status.
        return body;
    }

    async validateDiscoverWorkflowFilter(response) {
        const body = await this.validateSuccessResponse(response, 200);
        // Per notes, only validating status code and response status.
        return body;
    }

    async validateDiscoverToolFilter(response) {
        const body = await this.validateSuccessResponse(response, 200);
        // Per notes, only validating status code and response status.
        return body;
    }

    async validateDiscoverGuardrailFilter(response) {
        const body = await this.validateSuccessResponse(response, 200);
        // Per notes, only validating status code and response status.
        return body;
    }

    async validateDiscoverKnowledgebaseFilter(response) {
        const body = await this.validateSuccessResponse(response, 200);
        // Per notes, only validating status code and response status.
        return body;
    }
}

module.exports = new DiscoverValidator();