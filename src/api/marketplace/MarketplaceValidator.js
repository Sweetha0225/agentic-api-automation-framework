const { expect } = require('@playwright/test');
const BaseValidator = require('../../core/base/BaseValidator');

class MarketplaceValidator extends BaseValidator {
    async validateSearchResponse(response) {
        const body = await this.validateSuccessResponse(response, 200);
        // Per the spec notes, only validating HTTP status and response status field.
        return body;
    }
}

module.exports = new MarketplaceValidator();