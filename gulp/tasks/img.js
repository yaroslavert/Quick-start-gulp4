'use strict';

module.exports = function() {
    $.gulp.task('img', function() {
        return $.gulp.src($.config.imgInput, { since: $.gulp.lastRun('img') })
            .pipe($.gulp.dest($.config.imgOutput));
    });
};
