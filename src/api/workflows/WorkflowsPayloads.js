const WorkflowsData = require('./WorkflowsData');

class WorkflowsPayloads {
    static createPayload(overrides = {}) {
        const defaultPayload = {
            name: WorkflowsData.generateName(),
            description: "Testing",
            practiceArea: 4,
            tags: [5],
            workflowAgents: [
                {
                    serial: 1,
                    agentId: 11245
                }
            ],
            topP: null,
            maxToken: null,
            temperature: null,
            selectedAiEngine: null,
            selectedModel: null,
            teamId: 204,
            status: "CREATED",
            hierarchyEntityId: 546,
            hierarchyLevel: "TEAM",
            workflowConfig: {
                managerLlm: [],
                topP: null,
                maxToken: null,
                temperature: null,
                enableAgenticMemory: false
            }
        };
        return { ...defaultPayload, ...overrides };
    }

    static updatePayload(id, overrides = {}) {
        const createPayload = this.createPayload(overrides);
        // Per spec, update payload is the same as create but with a leading 'id' field
        return {
            id,
            ...createPayload,
            ...overrides
        };
    }
}

module.exports = WorkflowsPayloads;
