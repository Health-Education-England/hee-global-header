// Dependencies.
const clean = require('gulp-clean');
const gulp = require('gulp');

// Task runners.
const taskAssets = require('./tasks/assets');
const taskTemplates = require('./tasks/templates');
const taskServe = require('./tasks/serve');

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

  gulp.watch(['src/**/*.njk', 'src/**/*.html'], taskTemplates.compileTemplates);
}

gulp.task('build', gulp.series(
  cleanPublic,
  'build:assets',
  'build:templates'
));

gulp.task('serve', gulp.series([
  'build',
  taskServe.serve,
]));

gulp.task('default', gulp.series([
  'build',
  'serve'
]));

gulp.task('watch', gulp.series([
  'build',
  gulp.parallel([taskServe.serve, watch]),
]));

