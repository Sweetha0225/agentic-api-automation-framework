const WorkflowsData = require('../data/workflows/WorkflowsData');

class WorkflowsPayloads {
  createWorkflowPayload(overrides = {}) {
    const defaultPayload = {
      name: WorkflowsData.generateWorkflowName(),
      description: 'Testing',
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
      status: 'CREATED',
      hierarchyEntityId: 546,
      hierarchyLevel: 'TEAM',
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

  updateWorkflowPayload(id, name, overrides = {}) {
    const createPayload = this.createWorkflowPayload();
    const defaultPayload = {
      ...createPayload,
      id,
      name
    };
    return { ...defaultPayload, ...overrides };
  }
}

module.exports = new WorkflowsPayloads();
