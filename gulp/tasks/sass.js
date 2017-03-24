module.exports = function () {
   $.gulp.task('sass',function () {

        if($.environment==='develop'){
            return $.gulp.src('./source/style/*.scss')
                .pipe($.gl.sourcemaps.init())
                .pipe($.gl.sass().on('error',$.gl.notify.onError({title:"Style"})))
                .pipe($.gl.sourcemaps.write())
                .pipe($.gulp.dest($.config.root + '/assets/css'))
                .pipe($.browserSync.stream())
        }

        return $.gulp.src('./source/style/*.scss')
            .pipe($.gl.sass().on('error',$.gl.notify.onError({title:"Style"})))
            .pipe($.gl.autoprefixer({ browsers : $.config.autoprefixerConfig}))
            .pipe($.gl.csso())
            .pipe($.gulp.dest($.config.root + '/assets/css'))
            .pipe($.browserSync.stream())
   });
};