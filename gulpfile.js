// Dependencies.
const clean = require('gulp-clean');
const gulp = require('gulp');

// Task runners.
const taskAssets = require('./tasks/assets');
const taskTemplates = require('./tasks/templates');

function cleanPublic() {
  return gulp.src('public', { allowEmpty: true})
    .pipe(clean());
}

function watch(done) {
  gulp.watch(['src/**/*.scss'], gulp.parallel([
    taskAssets.compileScripts
  ]));

  gulp.watch(['src/**/*.js'], gulp.parallel([
    taskAssets.compileScripts
  ]));

  //gulp.watch(['src/**/*.njk', 'src/**/*.html'], taskTemplates.buildTemplates);
}

gulp.task('build', gulp.series(
  cleanPublic,
  'build:assets'
));
