const BaseService = require('./BaseService');
const client = require('../api/marketplace/MarketplaceClient');
const validator = require('../api/marketplace/MarketplaceValidator');

class MarketplaceService extends BaseService {
    constructor() {
        super(client);
    }

    async getMarketplaceAgent() {
        const response = await this.client.search('types=agent&pageNumber=1&pageSize=16');
        return await validator.validateSearchResponse(response);
    }

    async getMarketplaceGuardRail() {
        const response = await this.client.search('types=guardRail&pageNumber=1&pageSize=16');
        return await validator.validateSearchResponse(response);
    }

    async getMarketplaceTool() {
        const response = await this.client.search('types=tool&pageNumber=1&pageSize=16');
        return await validator.validateSearchResponse(response);
    }

    async getMarketplaceKnowledgebase() {
        const response = await this.client.search('types=knowledgebase&pageNumber=1&pageSize=16');
        return await validator.validateSearchResponse(response);
    }

    async getMarketplaceWorkflow() {
        const response = await this.client.search('types=workflow&pageNumber=1&pageSize=16');
        return await validator.validateSearchResponse(response);
    }

    async getMarketplacePlugin() {
        const response = await this.client.search('types=plugin&pageNumber=0&pageSize=15');
        return await validator.validateSearchResponse(response);
    }

    async getMarketplaceAgentTag() {
        const response = await this.client.search('types=agent&tags=5&pageNumber=1&pageSize=16');
        return await validator.validateSearchResponse(response);
    }

    async getMarketplaceGuardRailTag() {
        const response = await this.client.search('types=guardRail&tags=5&pageNumber=1&pageSize=16');
        return await validator.validateSearchResponse(response);
    }

    async getMarketplaceToolTag() {
        const response = await this.client.search('types=tool&tags=5&pageNumber=1&pageSize=16');
        return await validator.validateSearchResponse(response);
    }

    async getMarketplaceKnowledgebaseTag() {
        const response = await this.client.search('types=knowledgebase&tags=5&pageNumber=1&pageSize=16');
        return await validator.validateSearchResponse(response);
    }

    async getMarketplaceWorkflowTag() {
        const response = await this.client.search('types=workflow&tags=5&pageNumber=1&pageSize=16');
        return await validator.validateSearchResponse(response);
    }
}

module.exports = new MarketplaceService();