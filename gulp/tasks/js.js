module.exports = function () {
  $.gulp.task('js',function () {
      return $.gulp.src($.config.jsInput)
          .pipe($.gl.babel({
             presets : ['es2015']
          }))
          .pipe($.gl.sourcemaps.init())
          .pipe($.gl.concat('app.js'))
          .pipe($.gl.uglify())
          .pipe($.gl.sourcemaps.write())
          .pipe($.gulp.dest($.config.jsOutput))
  });
};