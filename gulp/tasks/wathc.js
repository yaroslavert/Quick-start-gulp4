(function(){
    'use strict';

    module.exports = function() {
        $.gulp.task('watch', function() {
            $.gulp.watch($.config.pugInput,  $.gulp.series('pug'));
            $.gulp.watch($.config.jsInput, $.gulp.series('js'));
            $.gulp.watch($.config.sassInput, $.gulp.series('sass'));
            $.gulp.watch($.config.imgInput, $.gulp.series('copy:image'));
        });
    }
}());