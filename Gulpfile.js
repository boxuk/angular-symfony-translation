'use strict';

var gulp = require('gulp');

// Require tasks
require('./gulp-tasks/build');
require('./gulp-tasks/karma');
require('./gulp-tasks/lint');
require('./gulp-tasks/watch');

// Set default task
gulp.task('default', ['watch']);
