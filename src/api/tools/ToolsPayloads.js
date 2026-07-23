const ToolsData = require('./ToolsData');

class ToolsPayloads {
    static createPayload(overrides = {}) {
        const defaultPayload = {
            toolName: ToolsData.generateName(),
            toolDescription: 'Agentic Tool to estimate the carbon footprint for various activities, travel, or energy usage using a public API.',
            toolConfig: {
                image: '',
                tool_class_def: '<Python Class Definition>',
                tool_class_name: 'CarbonFootprintEstimator'
            },
            status: 'CREATED',
            teamId: 204,
            tags: [13],
            practiceArea: 12,
            hierarchyEntityId: 918,
            hierarchyLevel: 'APPLICATION'
        };
        return { ...defaultPayload, ...overrides };
    }

    static updatePayload(id, overrides = {}) {
        const createPayload = this.createPayload(overrides);
        return {
            id,
            ...createPayload,
            ...overrides
        };
    }

    static approvePayload(id, overrides = {}) {
        const defaultPayload = {
            id: id,
            status: 'APPROVED',
            comments: {
                whatWentGood: 'approved',
                whatWentWrong: '',
                improvements: ''
            }
        };
        return { ...defaultPayload, ...overrides };
    }
}

module.exports = ToolsPayloads;