const BaseService = require('./BaseService');
const client = require('../api/agents/AgentsClient');
const validator = require('../api/agents/AgentsValidator');

class AgentsService extends BaseService {

    constructor() {
        super(client);
    }

    /**
     * Retrieves all agents and validates the response.
     * @param {number} expectedStatus - Optional expected status code for validation.
     */
    async getAll(expectedStatus = 200) {
        const response = await this.client.getAll();
        return await validator.validateGetAll(response, expectedStatus);
    }
}

module.exports = new AgentsService();
