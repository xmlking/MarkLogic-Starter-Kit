let del         = require('del'),
  rjs         = require('requirejs'),
  gif         = require('gulp-if'),
  useref      = require('gulp-useref'),
  replace     = require('gulp-replace'),
  csso        = require('gulp-csso');

export default function build(gulp, cfg, args) {
  'use strict';



  gulp.task('bundle',gulp.series(gulp.parallel('views', 'scripts'), () =>  {
    return new Promise((resolve, reject) => {
      rjs.optimize(cfg.buildProfile, (buildResponse) => {
        //console.log('build response', buildResponse);
        resolve(buildResponse);
      }, function (err) {
        reject(err);
      });
    });
  }));

  gulp.task('html', gulp.series('styles', () => {
    let assets = useref.assets({searchPath: '{.tmp,app}', types: ['css']});
    return gulp.src('app/*.html')
      .pipe(assets)
//            .pipe($.ngAnnotate())
//            .pipe(gif('*.js', $.uglify({preserveComments: 'some'})))
      .pipe(gif('*.css', csso()))
      .pipe(assets.restore())
      .pipe(useref())
      .pipe(replace('../../../bower_components/bootstrap-sass-official/assets/fonts/bootstrap', 'common/fonts'))
      .pipe(gulp.dest('dist'));
  }));

  gulp.task('extras', () => {
    return gulp.src(cfg.paths.extras, {dot: true})
      .pipe(gulp.dest('dist'));
  });

  gulp.task('clean', (cb) => {
    del(['.tmp', 'dist'], cb);
  });

  /**
   * Warning - bundle task has to be done first, coz it overwrites  :(
   */
  gulp.task('build',gulp.series('bundle', 'html', gulp.parallel('images', 'fonts', 'extras')));

  gulp.task('default', gulp.series('clean', 'build'));

}
