'use strict';

var gulp = require('gulp'),
    karma = require('karma').server,
    karmaConfig = require('../karma.conf');

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
    karmaConfig.singleRun = true;
    karmaConfig.autoWatch = false;

    karma.start(karmaConfig, done);
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
    karmaConfig.singleRun = false;
    karmaConfig.autoWatch = true;

    karma.start(karmaConfig, done);
});
