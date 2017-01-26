module.exports=function () {
    $.gulp.task('pug',function () {
        return $.gulp.src($.config.pugInput)
            .pipe($.gl.pug({ pretty : true }))
            .on('error',$.gl.notify.onError(function (error) {
                return{
                    title: 'pug',
                    message: error.message
                }
            }))
            .pipe($.gulp.dest($.config.pugOutput))
    });
};