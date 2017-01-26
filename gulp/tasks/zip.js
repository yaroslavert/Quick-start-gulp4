module.exports=function () {
  $.gulp.task('zip',function () {
      return $.gulp.src(root+'/**/*.*')
          .pipe($.gl.zip('buld.zip'))
          .pipe($.gulp.dest(root))
  });
};