'use strict';

var gulp = require('gulp'),
    gjslint = require('gulp-gjslint'),
    src = ['src/**/*.js', 'test/integration/**/*.js'];

/**
 * Task: lint
 *
 * Lint project files using Google Closure Linter.
 *
 * Reports errors to the console.
 */
gulp.task('lint', function() {
    return gulp.src(src)
        .pipe(gjslint())
        .pipe(gjslint.reporter('console'));
});

/**
 * Task: lintL:ci
 *
 * Lint project files using Google Closure Linter.
 *
 * Reports errors to the console and emits error
 * if linting fails.
 *
 * Useful for CI environments.
 */
gulp.task('lint:ci', function() {
    return gulp.src(src)
        .pipe(gjslint())
        .pipe(gjslint.reporter('console'))
        .pipe(gjslint.reporter('fail'));
});
