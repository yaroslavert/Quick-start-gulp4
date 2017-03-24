module.exports=function () {
  $.gulp.task('zip',function () {
      return $.gulp.src($.config.root+'/**/*.*')
          .pipe($.gl.zip('build.zip'))
          .pipe($.gulp.dest($.config.root))
  });
};