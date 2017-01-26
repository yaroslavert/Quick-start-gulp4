module.exports = function () {
   $.gulp.task('sass',function () {
       return $.gulp.src($.config.sassInput)
           .pipe($.gl.sourcemaps.init())
           .pipe($.gl.sass().on('error',$.gl.notify.onError({title:"Style"})))
           .pipe($.gl.autoprefixer({ browsers : $.config.autoprefixerConfig}))
           .pipe($.gl.csso())
           .pipe($.gl.sourcemaps.write())
           .pipe($.gulp.dest($.config.sassOutput))
           .pipe($.browserSync.stream())
   });
};