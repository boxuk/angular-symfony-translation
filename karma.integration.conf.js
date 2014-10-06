'use strict';

/**
 * @fileoverview
 *
 * Karma config for integration tests.
 */

/**
 * Config generator.
 *
 * We need to run integration tests on different versions of the Translator
 * library. This function allows for the Translator source file location
 * to be specified which is loaded onto the global namespace prior to the
 * test running.
 *
 * The library is provided as a UMD and so this logic could be moved to
 * the test file(s), which would need to be preprocessed by a module loader
 * like RequireJS. As we're already using Google Closure, that could get
 * complicated. Furthermore, if a future version of the library is not
 * provided as a UMD that approach may fail.
 *
 * This is a less DRY approach, but is both the simplest implementation as well
 * as (arguably) the more future-proof approach.
 *
 * @param {String} translatorFilename - The filename of the Translator library.
 * @returns {*|Object}
 */
var createIntegrationTestConfig = function(translatorFilename)
{
    /**
     * @type {Object}
     */
    var config = require('./karma.common.conf');

    config.singleRun = true;

    config.autoWatch = false;

    config.files = [
        // Vendor
        'bower_components/es5-shim/es5-shim.js',
        'bower_components/angularjs/angular.js',
        'bower_components/angular-mocks/angular-mocks.js',

        // Closure library
        'bower_components/closurelibrary/closure/goog/base.js',

        'dist/angular-symfony-translation.js',

        // Translator library
        'test/lib/' + translatorFilename,

        // Translation fixtures
        'test/fixture/' + translatorFilename,

        // Integration tests
        {
            pattern: 'test/integration/**.spec.js'
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

    config.reporters = ['spec'];

    return config;
};

/**
 * @type {Function}
 */
module.exports = createIntegrationTestConfig;
