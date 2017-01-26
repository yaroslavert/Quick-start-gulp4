'use strict';

module.exports = function() {
    $.gulp.task('copy:image', function() {
        return $.gulp.src($.config.imgInput, { since: $.gulp.lastRun('copy:image') })
            .pipe($.gulp.dest($.config.imgOutput));
    });
};
