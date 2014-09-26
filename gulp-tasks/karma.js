'use strict';

var gulp = require('gulp'),
    chalk = require('chalk'),
    karma = require('karma').server,
    unitConfig = require('../karma.unit.conf'),
    integrationConfigFactory = require('../karma.integration.conf');

/**
 * Task: karma:ci
 *
 * Runs Karma unit tests with the config in karma.conf.js
 *
 * The config is altered prior to running Karma,
 * so that Karma will run using single run mode.
 *
 * Intended for use with a CI server but is also useful
 * to run locally.
 */
gulp.task('karma:ci', function(done) {
    unitConfig.singleRun = true;
    unitConfig.autoWatch = false;

    karma.start(unitConfig, done);
});

/**
 * Task: karma:tdd
 *
 * Runs Karma unit tests with the config in karma.conf.js
 *
 * The config is altered prior to running Karma,
 * so that Karma runs indefinitely and will watch
 * files for changes.
 *
 * Can be used during development.
 */
gulp.task('karma:tdd', function(done) {
    unitConfig.singleRun = false;
    unitConfig.autoWatch = true;

    karma.start(unitConfig, done);
});

/**
 * Task: karma:integration
 *
 * Runs all integration tests.
 */
gulp.task('karma:integration', ['karma:integration1x', 'karma:integration2x']);

/**
 * Task: karma:integration1x
 *
 * Run integrations tests against version 1.x of the Translation bundle.
 */
gulp.task('karma:integration1x', function(done) {
    var translatorLib = 'translator-1.2.js',
        config = integrationConfigFactory(translatorLib);

    console.log(
        chalk.underline.white('Integration test using: ' + translatorLib)
    );

    karma.start(config, done);
});

/**
 * Task: karma:integration2x
 *
 * Run integrations tests against version 2.x of the Translation bundle.
 */
gulp.task('karma:integration2x', function(done) {
    var translatorLib = 'translator-2.1.1.js',
        config = integrationConfigFactory(translatorLib);

    console.log(
        chalk.underline.white('Integration test using: ' + translatorLib)
    );

    karma.start(config, done);
});
