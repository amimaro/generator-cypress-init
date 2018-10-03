'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-cypress-init:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({ files: true, baseUrl: 'baseUrl' });
  });

  it('creates files', () => {
    assert.file(['./tests/e2e/specs/test.js']);
  });

  it('set baseUrl', () => {
    assert.fileContent('./cypress.json', 'baseUrl');
  });
});
