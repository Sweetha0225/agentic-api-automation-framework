const { expect } = require('@playwright/test');
const BaseValidator = require('../../core/base/BaseValidator');

class PluginsValidator extends BaseValidator {
    async validateGetAll(response) {
        const body = await this.validateSuccessResponse(response, 200);
        this.validateProperty(body, 'data');
        expect(body.data.message).toBe('Unified Search completed successfully');
        // Per notes, not validating response structure or plugin list as data is dynamic.
        return body;
    }

    async validateDownloadVSCode(response) {
        this.validateStatusCode(response, 200);
        // Per notes, no response body is returned. Validating only the HTTP status code.
    }

    async validateDownloadVisualStudio(response) {
        this.validateStatusCode(response, 200);
        // Per notes, no response body is returned. Validating only the HTTP status code.
    }

    async validateDownloadAndroidStudio(response) {
        this.validateStatusCode(response, 200);
        // Per notes, no response body is returned. Validating only the HTTP status code.
    }

    async validateDownloadEclipse(response) {
        this.validateStatusCode(response, 200);
        // Per notes, no response body is returned. Validating only the HTTP status code.
    }

    async validateDownloadIntellij(response) {
        this.validateStatusCode(response, 200);
        // Per notes, no response body is returned. Validating only the HTTP status code.
    }

    async validateDownloadPyCharm(response) {
        this.validateStatusCode(response, 200);
        // Per notes, no response body is returned. Validating only the HTTP status code.
    }
}

module.exports = new PluginsValidator();
