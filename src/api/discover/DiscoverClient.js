const BaseApiClient = require('../clients/BaseApiClient');
const Endpoints = require('./DiscoverEndpoints');

class DiscoverClient {
    constructor() {
        this.client = new BaseApiClient();
    }

    async initialize() {
        await this.client.initialize();
    }

    async dispose() {
        await this.client.dispose();
    }

    async discoverAgentSearch() {
        return await this.client.get(Endpoints.DISCOVER_AGENT_SEARCH);
    }

    async discoverWorkflowSearch() {
        return await this.client.get(Endpoints.DISCOVER_WORKFLOW_SEARCH);
    }

    async discoverToolSearch() {
        return await this.client.get(Endpoints.DISCOVER_TOOL_SEARCH);
    }

    async discoverKnowledgebaseSearch() {
        return await this.client.get(Endpoints.DISCOVER_KNOWLEDGEBASE_SEARCH);
    }

    async discoverGuardrailSearch() {
        return await this.client.get(Endpoints.DISCOVER_GUARDRAIL_SEARCH);
    }

    async discoverAgentFilter() {
        return await this.client.get(Endpoints.DISCOVER_AGENT_FILTER);
    }

    async discoverWorkflowFilter() {
        return await this.client.get(Endpoints.DISCOVER_WORKFLOW_FILTER);
    }

    async discoverToolFilter() {
        return await this.client.get(Endpoints.DISCOVER_TOOL_FILTER);
    }

    async discoverGuardrailFilter() {
        return await this.client.get(Endpoints.DISCOVER_GUARDRAIL_FILTER);
    }

    async discoverKnowledgebaseFilter() {
        return await this.client.get(Endpoints.DISCOVER_KNOWLEDGEBASE_FILTER);
    }
}

module.exports = new DiscoverClient();