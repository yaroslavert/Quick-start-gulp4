module.exports=function () {

    $.gulp.task('libJs',function () {
        return $.gulp.src($.path.jsFoundation)
            .pipe($.gl.concat('lib.js'))
            .pipe($.gl.uglify())
            .pipe($.gulp.dest($.config.jsFoundation))
    });
};