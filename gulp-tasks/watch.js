'use strict';

var gulp = require('gulp');

/**
 * Task: Watch
 */
gulp.task('watch', function() {
    // Build on src changes
    gulp.watch('./src/**/*.js', ['build']);
});
