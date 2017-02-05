module.exports = function () {
   $.gulp.task('libCss',function () {
      return $.gulp.src($.path.cssFoundation)
          .pipe($.gl.concatCss('vendor.css'))
          .pipe($.gl.csso())
          .pipe($.gulp.dest($.config.foundationCss))
   });
};