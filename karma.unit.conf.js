'use strict';

/**
 * @fileoverview
 *
 * Karma config for unit tests.
 */

/**
 * @type {Object}
 */
var config = require('./karma.common.conf');

config.coverageReporter = {
    type: 'lcov',
    dir: 'coverage'
};

config.files = [
    // Vendor
    'bower_components/es5-shim/es5-shim.js',
    'bower_components/angularjs/angular.js',
    'bower_components/angular-mocks/angular-mocks.js',

    // Closure library
    'bower_components/closurelibrary/closure/goog/base.js',

    // Unit tests
    {
        pattern: 'src/**/*.spec.js'
    },

    // Source files
    {
        pattern: 'src/**/*.js',
        included: false
    },

    // Closure dependency resolution
    {
        pattern: 'bower_components/closurelibrary/closure/goog/deps.js',
        included: false,
        served: false
    }
];

// Use coverage reporter
config.reporters = ['spec', 'coverage'];

/**
 * @type {*|Object}
 */
module.exports = config;
