'use strict';

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

        'src/**/*.js': [
            'closure',
            'coverage'
        ],

        'bower_components/closurelibrary/closure/goog/deps.js': [
            'closure-deps'
        ]
    },

    files: [
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
    ],

    reporters: [
        'spec',
        'coverage'
    ],

    browsers: [
        'PhantomJS'
    ],

    coverageReporter: {
        type: 'html',
        dir: 'coverage'
    }

};
