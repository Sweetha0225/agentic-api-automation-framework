const BaseService = require('./BaseService');
const client = require('../api/agents/AgentsClient');
const payloads = require('../api/agents/AgentsPayloads');
const validator = require('../api/agents/AgentsValidator');
const AgentsData = require('../api/agents/AgentsData');

class AgentsService extends BaseService {

    constructor() {
        super(client);
    }

    /**
     * Creates an agent using the default payload builder.
     * Used for functional tests and setup.
     */
    async create(overrides = {}) {
        const payload = payloads.createPayload(overrides);
        const response = await this.client.create(payload);
        return await validator.validateCreate(response, 201);
    }

    /**
     * Creates an agent using a raw, literal payload.
     * Used for negative, boundary, and validation tests.
     */
    async createRaw(payload, expectedStatus) {
        // Substitute dynamic placeholders like {AgentName}
        let processedPayload = JSON.stringify(payload);
        if (processedPayload.includes('{AgentName}')) {
            processedPayload = processedPayload.replace('{AgentName}', AgentsData.getUniqueName());
        }
        
        const finalPayload = JSON.parse(processedPayload);

        const response = await this.client.create(finalPayload);
        return await validator.validateCreate(response, expectedStatus);
    }
}

module.exports = new AgentsService();
