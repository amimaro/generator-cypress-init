'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(`Welcome to ${chalk.green('generator-cypress-init')}!`));

    const prompts = [
      {
        type: 'confirm',
        name: 'files',
        message: `Create tests folder at root directory and config script at ${chalk.red(
          'package.json'
        )}?`,
        default: true
      }
    ];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(this.templatePath('cypress.json'), this.destinationPath('cypress.json'));
    this.fs.copy(
      this.templatePath('tests/e2e/plugins'),
      this.destinationPath('tests/e2e/plugins')
    );
    this.fs.copy(
      this.templatePath('tests/e2e/specs'),
      this.destinationPath('tests/e2e/specs')
    );
    this.fs.copy(
      this.templatePath('tests/e2e/support'),
      this.destinationPath('tests/e2e/support')
    );
    this.fs.copy(
      this.templatePath('tests/e2e/_.eslintrc.js'),
      this.destinationPath('.eslintrc.js')
    );
  }

  install() {
    this.npmInstall(['cypress'], {
      'save-dev': true
    });
  }
};
