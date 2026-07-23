const AgentsData = require('./AgentsData');

class AgentsPayloads {
    static createPayload(overrides = {}) {
        const defaultPayload = {
            agentDetails: 'A production-ready agent designed to generate detailed weather reports by integrating with leading weather APIs. It processes dynamic location inputs, normalizes weather data, and produces outputs in multiple formats for various deployment scenarios.',
            name: AgentsData.generateName(),
            role: 'Senior Meteorologist and Data Integration Specialist',
            goal: 'Generate real-time, accurate, and comprehensive weather reports with multi-format outputs, ensuring reliable integration with existing systems and user interfaces.',
            backstory: 'Built by experts in meteorological data analysis and API integration, this agent leverages extensive domain knowledge and technical expertise to deliver actionable weather insights. It has been designed following best practices in data validation, error handling, and output formatting, ensuring robust and scalable performance.',
            description: 'INSTRUCTIONS:\n1. Accept dynamic user input via {{input1}} for the target location (e.g., city name, zip code).\n2. Validate the input to confirm it is a valid geographic location.\n3. Initiate secure API connections to one or more weather data providers.\n4. Retrieve current weather metrics including temperature, humidity, wind speed, precipitation, and alerts.\n5. Normalize and consolidate the data into a standardized structure.\n6. Generate a comprehensive weather report with the following formats:\n   - Text Summary: A human-readable summary of current weather conditions.\n   - JSON Output: Structured data for programmatic access.\n   - HTML Snippet: Embed-ready component for web applications.\n7. Implement error handling procedures to manage potential API failures, invalid inputs, or connectivity issues. Include retry logic and fallback messaging.\n8. Record logs of all transactions and errors for monitoring and troubleshooting.\n9. Ensure the design supports high-frequency requests and caching to optimize response times.\n\nOUTPUT FORMAT:\n- Text Summary: \'Current weather in [Location]: [Conditions], [Temperature]\u00b0F, [Humidity]% humidity, wind at [Wind Speed] mph.\'\n- JSON: { \"location\": \"[Location]\", \"temperature\": \"[Temperature]\", \"humidity\": \"[Humidity]\", \"wind_speed\": \"[Wind Speed]\", \"conditions\": \"[Conditions]\" }\n- HTML: <div class=\'weather-report\'><h3>[Location] Weather</h3><p>[Temperature]\u00b0F, [Conditions]</p></div>\n\nSAMPLE:\nInput: {{input1}} = \'New York, NY\'\nOutput Text: \'Current weather in New York, NY: Partly cloudy, 68\u00b0F, 55% humidity, wind at 12 mph.\'\nOutput JSON: { \"location\": \"New York, NY\", \"temperature\": 68, \"humidity\": 55, \"wind_speed\": 12, \"conditions\": \"Partly cloudy\" }\nOutput HTML: <div class=\'weather-report\'><h3>New York, NY Weather</h3><p>68\u00b0F, Partly cloudy</p></div>',
            expectedOutput: 'The agent outputs a comprehensive weather report including a text summary, JSON object with key weather metrics, and an HTML snippet. This output is structured to seamlessly integrate with various applications and user interfaces.',
            inputFields: null,
            tools: [],
            kbIds: [],
            modelId: 53,
            agentConfigs: {
                temperature: 0.6,
                topP: 0.9,
                maxIter: 2000,
                maxRpm: 20,
                maxExecutionTime: 120,
                allowDelegation: false,
                isSafeCodeExecution: false,
                guardrailId: [],
                allowCodeExecution: false,
                aiEngine: 'AzureOpenAI',
                modelName: 'gpt-4o',
                preset: 'Verbose'
            },
            teamId: 985,
            status: 'CREATED',
            tags: [2, 4],
            practiceArea: 4,
            operationType: 'CREATE',
            isAutoCreation: true,
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
            id,
            status: 'APPROVED',
            comments: {
                whatWentWrong: 'Delayed response',
                whatWentGood: 'Team collaboration was excellent',
                improvements: 'More automation in testing'
            }
        };
        return { ...defaultPayload, ...overrides };
    }
}

module.exports = AgentsPayloads;