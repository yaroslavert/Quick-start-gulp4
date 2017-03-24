(function(){
    'use strict';

    module.exports = function() {
        $.gulp.task('watch', function() {
            $.gulp.watch($.path.watch.pug,$.gulp.series('pug'));
            $.gulp.watch($.path.watch.sass,$.gulp.series('sass'));
            $.gulp.watch($.path.watch.js,$.gulp.series('js'));
            $.gulp.watch($.path.watch.img,$.gulp.series('img'));
            $.gulp.watch($.path.watch.font,$.gulp.series('font'));
            $.gulp.watch($.path.watch.cssFoundation,$.gulp.series('libCss','sass'));
            $.gulp.watch($.path.watch.jsFoundation,$.gulp.series('libJs','js'))
        });
    }
}());