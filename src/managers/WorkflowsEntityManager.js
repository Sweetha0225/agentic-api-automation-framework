const BaseEntityManager = require('../core/entity/BaseEntityManager');
const service = require('../services/WorkflowsService');
const logger = require('../core/logging/Logger');

class WorkflowsEntityManager extends BaseEntityManager {
    constructor() {
        // This entity manager doesn't need its own client, it uses the service for cleanup.
        super(null); 
        this.createdWorkflows = [];
    }

    /**
     * Creates a workflow and registers it for cleanup.
     * @param {object} overrides - Payload overrides.
     * @returns {Promise<object>} The created workflow data from the service response.
     */
    async createWorkflow(overrides = {}) {
        const createResponse = await service.create(overrides);
        const id = createResponse.data.id;
        const name = createResponse.payload.name;
        
        // Register the initial ID for potential cleanup, though the spec indicates
        // the ID changes on update, making this a complex cleanup scenario.
        this.registerForCleanup({ id, name, isDeleted: false });
        return createResponse; // Return the full service response for chaining
    }

    /**
     * Registers a workflow for cleanup.
     * @param {object} workflow - The workflow object with at least an 'id' and 'name'.
     */
    registerForCleanup(workflow) {
        this.createdWorkflows.push(workflow);
        logger.info(`Registered workflow ID ${workflow.id} for cleanup.`);
    }

    /**
     * Cleans up created workflows by deleting them.
     */
    async cleanup() {
        logger.info(`Cleaning up ${this.createdWorkflows.length} created workflow(s)...`);
        for (const workflow of this.createdWorkflows) {
            if (!workflow.isDeleted) {
                try {
                    // The ID for deletion might have changed after an update.
                    // The test specs are responsible for updating the ID in the manager if needed.
                    await service.delete(workflow.id, workflow.name);
                    logger.info(`Successfully cleaned up workflow ID: ${workflow.id}`);
                } catch (error) {
                    logger.error(`Failed to cleanup workflow ID ${workflow.id}. Error: ${error.message}`);
                    // Continue cleanup even if one fails
                }
            }
        }
        this.createdWorkflows = [];
    }
}

module.exports = new WorkflowsEntityManager();
