module.exports = function () {
  $.gulp.task('js',function () {
      if($.environment==='develop'){
      return $.gulp.src('./source/js/**/*')
        .pipe($.gl.babel({
            presets : ['es2015']
        }))
        .pipe($.gl.sourcemaps.init())
        .pipe($.gl.concat('app.js'))
        .pipe($.gl.sourcemaps.write())
        .pipe($.gulp.dest($.config.root + '/assets/js'))

    }
    return $.gulp.src('./source/js/**/*')
          .pipe($.gl.babel({
             presets : ['es2015']
          }))
          .pipe($.gl.concat('app.js'))
          .pipe($.gl.uglify())
          .pipe($.gulp.dest($.config.root + '/assets/js'))
  });
};