(function(){
    'use strict';

    module.exports = function() {
        $.gulp.task('watch', function() {
            $.gulp.watch($.config.pugWathc,  $.gulp.series('pug'));
            $.gulp.watch($.config.jsInput, $.gulp.series('js'));
            $.gulp.watch($.config.sassWathc, $.gulp.series('sass'));
            $.gulp.watch($.config.imgInput, $.gulp.series('img'));
        });
    }
}());