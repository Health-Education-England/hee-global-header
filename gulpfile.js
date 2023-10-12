// Dependencies.
const clean = require('gulp-clean');
const gulp = require('gulp');

// Task runners.
const taskAssets = require('./tasks/assets');
const taskTemplates = require('./tasks/templates');

function watch(done) {
  gulp.watch(['src/**/*.scss'], gulp.parallel([
    taskAssets.compileStyles
  ]));

  gulp.watch(['src/**/*.js'], gulp.parallel([
    taskAssets.compileScripts
  ]));

  gulp.watch(['app/views/**/*.njk', 'app/views/**/*.html', 'app/assets/**/*.njk'], taskTemplates.buildTemplates);
}