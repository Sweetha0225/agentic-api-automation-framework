const BaseApiClient = require('../clients/BaseApiClient');
const Endpoints = require('./MarketplaceEndpoints');

class MarketplaceClient {
    constructor() {
        this.client = new BaseApiClient();
    }

    async initialize() {
        await this.client.initialize();
    }

    async dispose() {
        await this.client.dispose();
    }

    async search(params) {
        const endpoint = `${Endpoints.SEARCH_ENTITY}?${params}`;
        return await this.client.get(endpoint);
    }
}

module.exports = new MarketplaceClient();