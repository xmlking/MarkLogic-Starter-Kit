import {ErrorHandler} from './errors';

let sass        = require('gulp-ruby-sass'),
  sourcemaps  = require('gulp-sourcemaps'),
  filter      = require('gulp-filter'),
  browserSync = require('browser-sync'),
  autoprefixer= require('gulp-autoprefixer'),
  reload      = browserSync.reload;

export default function styles(gulp, cfg, args) {
  'use strict';

  gulp.task('styles', () => {
    return sass('src/', {
      style: 'expanded',
      precision: 10,
      sourcemap: (!optimize),
      loadPath: ['jspm_packages/bower/bourbon@4.2.1/app/assets/stylesheets']
    })
    .on('error', ErrorHandler.onError)
    .pipe(autoprefixer(cfg.autoprefixer))
    .pipe(sourcemaps.write('.', {
      includeContent: false,
      sourceRoot: '.'
    }))
    .pipe(gulp.dest('.tmp'))
    .pipe(filter('**/*.css'))
    .pipe(reload({stream: true}));
  });
}
