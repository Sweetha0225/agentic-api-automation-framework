const BaseService = require('./BaseService');
const client = require('../api/discover/DiscoverClient');
const validator = require('../api/discover/DiscoverValidator');

class DiscoverService extends BaseService {
    constructor() {
        super(client);
    }

    async discoverAgentSearch() {
        const response = await this.client.discoverAgentSearch();
        return await validator.validateDiscoverAgentSearch(response);
    }

    async discoverWorkflowSearch() {
        const response = await this.client.discoverWorkflowSearch();
        return await validator.validateDiscoverWorkflowSearch(response);
    }

    async discoverToolSearch() {
        const response = await this.client.discoverToolSearch();
        return await validator.validateDiscoverToolSearch(response);
    }

    async discoverKnowledgebaseSearch() {
        const response = await this.client.discoverKnowledgebaseSearch();
        return await validator.validateDiscoverKnowledgebaseSearch(response);
    }

    async discoverGuardrailSearch() {
        const response = await this.client.discoverGuardrailSearch();
        return await validator.validateDiscoverGuardrailSearch(response);
    }

    async discoverAgentFilter() {
        const response = await this.client.discoverAgentFilter();
        return await validator.validateDiscoverAgentFilter(response);
    }

    async discoverWorkflowFilter() {
        const response = await this.client.discoverWorkflowFilter();
        return await validator.validateDiscoverWorkflowFilter(response);
    }

    async discoverToolFilter() {
        const response = await this.client.discoverToolFilter();
        return await validator.validateDiscoverToolFilter(response);
    }

    async discoverGuardrailFilter() {
        const response = await this.client.discoverGuardrailFilter();
        return await validator.validateDiscoverGuardrailFilter(response);
    }

    async discoverKnowledgebaseFilter() {
        const response = await this.client.discoverKnowledgebaseFilter();
        return await validator.validateDiscoverKnowledgebaseFilter(response);
    }
}

module.exports = new DiscoverService();