// Dependencies.
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const rename = require('gulp-rename');
const taskServe = require('./serve');
const sass = require('gulp-sass')(require('sass'));
const webpack = require("webpack-stream");

const DIR_GLOBAL_MENU = './src/widget/';

function compileStyles() {
  return gulp.src(DIR_GLOBAL_MENU + 'widget.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(cleanCSS())
    .pipe(rename({basename: 'nhse-global-menu', extname: '.min.css' }))
    .pipe(gulp.dest('public/widgets/global-menu'))
    .pipe(taskServe.connect.reload())
    .on('error', (err) => {
      console.log(err)
      process.exit(1)
    });
}

function compileScripts() {
  return webpackBuild(
    DIR_GLOBAL_MENU + 'widget.js',
    'production',
    'nhse-menu-widget.min.js',
    'public/widgets/global-menu'
  );
}

/**
 * Executes webpack build for Javascript assets.
 *
 * @param {string} src        Source JS file.
 * @param {string} mode       Webpack mode (production or development).
 * @param {string} filename   Compiled filename.
 * @param {string} dest       Destination directory.
 *
 * @returns {Object}
 */
function webpackBuild(src, mode, filename, dest) {
  return gulp.src(src)
    .pipe(webpack({
      mode: mode,
      devtool: mode === 'development' ? 'inline-source-map' : false,
      module: {
        rules: [
          {
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env'],
              },
            },
          },
        ],
      },
      output: {
        filename: filename,
      },
      target: 'web'
    }))
    .pipe(gulp.dest(dest))
    .pipe(taskServe.connect.reload())
    .on('error', (err) => {
      console.log(err)
      process.exit(1)
    });
}

gulp.task('build:assets', gulp.parallel(
  compileStyles,
  compileScripts
));

exports.compileScripts = compileScripts
exports.compileStyles = compileStyles
