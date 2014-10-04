'use strict';

/**
 * @fileoverview
 *
 * The configuration used for Google Closure Compiler.
 */

var path = require('path'),
    bowerPath = __dirname + '/bower_components';

/**
 * Factory method for generating a closure config object.
 *
 * Options passed to the Closure compiler.
 * For more details, see:
 * https://www.npmjs.org/package/gulp-closure-compiler
 *
 * Common pitfalls:
 * https://developers.google.com/closure/compiler/docs/api-tutorial3#dangers
 *
 * @param {Object} options
 * @return {Object}
 */
exports.createConfig = function(options)
{
    var fileName = options.fileName;

    return {

        jar: path.resolve(
            bowerPath + '/closure-compiler/lib/vendor/compiler.jar'
        ),

        compilation_level: 'ADVANCED_OPTIMIZATIONS',

        language_in: 'ECMASCRIPT5_STRICT',

        manage_closure_dependencies: true,

        // Inject dependencies automatically
        angular_pass: true,

        // Keep @export annotated code.
        // Otherwise compiler may incorrectly flag code as being unused.
        generate_exports: true,

        // Ensure library properties and methods are not renamed
        // on compilation, e.g.:
        // angular.d -> angular.module
        externs: [
            path.resolve(
                bowerPath +
                    '/closure-library-externs/contrib/externs/angular-1.2.js'
            ),

            'externs/translator.js'
        ],

        js_output_file: 'dist/' + fileName,

        // Wrap compiled code in IIFE to protect global namespace,
        // and add URL to sourcemap.
        output_wrapper: '(function(){%output%})();' +
            '//# sourceMappingURL=' + fileName + '.map',

        // Generate source maps
        create_source_map: 'dist/' + fileName + '.map',

        source_map_format: 'V3'

    };
};
