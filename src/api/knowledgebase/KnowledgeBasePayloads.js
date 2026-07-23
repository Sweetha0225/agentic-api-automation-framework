const fs = require('fs');
const path = require('path');
const KnowledgeBaseData = require('./KnowledgeBaseData');

class KnowledgeBasePayloads {
    static createPayload(overrides = {}) {
        // Create a dummy file for upload
        const filePath = path.join(__dirname, 'test-file.txt');
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, 'This is a test file for automation.');
        }

        const defaultPayload = {
            fileName: 'test-file.txt',
            fileBuffer: fs.readFileSync(filePath),
            knowledgeBase: KnowledgeBaseData.generateName(),
            description: 'Test description for knowledge base created via automation',
            'model-ref': 8,
            type: 'normal',
            splitSize: 5000,
            practiceArea: 12,
            teamId: 204,
            status: 'CREATED',
            goodAt: '14',
            hierarchyEntityId: 918,
            hierarchyLevel: 'APPLICATION'
        };
        return { ...defaultPayload, ...overrides };
    }

    static approvePayload(id, overrides = {}) {
        const defaultPayload = {
            masterId: id,
            status: 'APPROVED',
            comment: 'APPROVED'
        };
        return { ...defaultPayload, ...overrides };
    }
}

module.exports = KnowledgeBasePayloads;
