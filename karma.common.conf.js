'use strict';

/**
 * @fileoverview
 *
 * Common config for Karma test runner.
 */

/**
 * @type {Object}
 */
module.exports = {

    frameworks: [
        'jasmine',
        'closure'
    ],

    preprocessors: {
        'src/**/*.spec.js': [
            'closure',
            'closure-iit'
        ],

        'test/integration/**/*.spec.js': [
            'closure',
            'closure-iit'
        ],

        'src/**/*.js': [
            'closure',
            'coverage'
        ],

        'bower_components/closurelibrary/closure/goog/deps.js': [
            'closure-deps'
        ]
    },

    reporters: [
        'spec'
    ],

    browsers: [
        'PhantomJS'
    ]

};
