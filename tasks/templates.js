// Dependencies.
const gulp = require('gulp');
const rename = require('gulp-rename');
const gulpNunjucks = require('gulp-nunjucks');
const nunjucks = require('nunjucks');
const beautify = require('gulp-beautify');
require('dotenv').config();

const taskServe = require('./serve');

const config = {
  baseUrl: process.env.BASE_URL ? process.env.BASE_URL : '/',
  dest: 'public/widgets/global-menu',
  templates: [
    'src'
  ],
};

function compileTemplates() {
  const basePath = process.env.REMOTE_BASEPATH;
  const environment = new nunjucks.Environment(
    new nunjucks.FileSystemLoader(config.templates)
  );
  environment.addGlobal('basePath', basePath)

  return gulp.src(['src/views/*.html'])
    .pipe(gulpNunjucks.compile({
      baseUrl: config.baseUrl,
    }, {
      env: environment,
    }))
    .pipe(rename({
      extname: '.html',
    }))
    .pipe(beautify.html({
      'indent_size': 2,
      'indent_char': ' ',
      'preserve_newlines': false
    }))
    .pipe(gulp.dest(config.dest))
    .pipe(taskServe.connect.reload());
}

gulp.task('build:templates', gulp.parallel(
  compileTemplates
));

exports.compileTemplates = compileTemplates
