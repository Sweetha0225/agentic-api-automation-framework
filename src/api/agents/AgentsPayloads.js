const AgentsData = require('./AgentsData');

class AgentsPayloads {

    static createPayload(overrides = {}) {
        const defaultPayload = {
            "agentDetails": "Detailed information about the agent's capabilities and configuration.",
            "name": AgentsData.getUniqueName(),
            "role": "Senior API QA Test Architect",
            "goal": "Produce a comprehensive, standards-compliant test case suite for any API.",
            "backstory": "With over 18 years of enterprise QA and API testing experience, this agent specializes in designing traceable, auditable, and standards-driven test case suites.",
            "description": "An agent designed to generate high-quality API test cases.",
            "expectedOutput": "A JSON array of test case objects.",
            "inputFields": ["API Specification (JSON)"],
            "tools": ["Schema Analyzer", "Test Case Generator"],
            "kbIds": [101, 202],
            "modelId": 1,
            "agentConfigs": {
              "temperature": 0.7,
              "topP": 0.9,
              "maxIter": 25,
              "maxRpm": 60,
              "maxExecutionTime": 300,
              "allowDelegation": true,
              "isSafeCodeExecution": true,
              "guardrailId": [901],
              "allowCodeExecution": true,
              "aiEngine": "Proprietary",
              "modelName": "gpt-4-turbo",
              "preset": "Default"
            },
            "teamId": 50,
            "status": "CREATED",
            "tags": [1, 2, 3],
            "practiceArea": 10,
            "operationType": "CREATE",
            "isAutoCreation": false,
            "hierarchyEntityId": 1000,
            "hierarchyLevel": "APPLICATION"
        };

        // Deep merge for nested agentConfigs
        if (overrides.agentConfigs) {
            overrides.agentConfigs = { ...defaultPayload.agentConfigs, ...overrides.agentConfigs };
        }

        return { ...defaultPayload, ...overrides };
    }
}

module.exports = AgentsPayloads;
