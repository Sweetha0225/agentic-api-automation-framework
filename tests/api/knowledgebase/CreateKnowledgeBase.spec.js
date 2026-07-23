// Implements: KnowledgeBase - create
const fs = require('fs');
const path = require('path');
const { test } = require('../../fixtures/knowledgebase.fixture');
const { expect } = require('@playwright/test');

test.describe('KnowledgeBase API', () => {
  const testFileName = 'test-upload.txt';
  const testFilePath = path.join(__dirname, testFileName);

  test.beforeAll(() => {
    // Create a dummy file for upload before tests run.
    fs.writeFileSync(testFilePath, 'This is a test file for knowledge base creation.');
  });

  test.afterAll(() => {
    // Cleanup the dummy file after all tests are done.
    fs.unlinkSync(testFilePath);
  });

  test('Validate Create KnowledgeBase API', async ({ knowledgeBaseEntityManager }) => {
    const { response, knowledgeBaseId } = await knowledgeBaseEntityManager.createKnowledgeBase(testFilePath);

    expect(knowledgeBaseId, 'The created knowledge base ID should be a positive number').toBeGreaterThan(0);
    expect(response.data.message).toBe('Files uploaded and processed');
    expect(response.data.kbDetail.files[0].fileName).toBe(testFileName);
  });
});
