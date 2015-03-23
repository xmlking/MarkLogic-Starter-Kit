let karma = require('karma').server;

export default function unitTests(gulp, cfg, args) {
  'use strict';

  var karmaCommonConf = cfg.karmaCommonConf;
  /**
   * Run test once and exit
   */
  gulp.task('test', gulp.series('transpile-deps', (done) => {
    karmaCommonConf.singleRun = true;
    karma.start(karmaCommonConf, done);
  }));

  /**
   * Watch for file changes and re-run tests on each change
   */
  gulp.task('tdd', gulp.series('transpile-deps', function (done) {
    karma.start(karmaCommonConf, done);
  }));
}
