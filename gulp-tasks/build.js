'use strict';

var gulp = require('gulp'),
    closureCompiler = require('closure-compiler-stream'),
    closureConfig = require(__dirname + '/../closure.config.js');

/**
 * Task: Build
 *
 * Compiles module using Google Closure Compiler.
 */
gulp.task('build', function() {
    var config,
        src;

    config = closureConfig.createConfig({
        fileName: 'angular-symfony-translation.js'
    });

    src = [
        'bower_components/closurelibrary/closure/goog/base.js',
        'src/**/*.js',
        '!src/**/*.spec.js'
    ];

    return gulp.src(src)
        .pipe(closureCompiler(config))
        .pipe(gulp.dest('./dist'))
});
