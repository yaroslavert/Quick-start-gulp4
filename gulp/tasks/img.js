'use strict';

module.exports = function() {
    $.gulp.task('img', function() {
        return $.gulp.src('./source/img/**/*' , { since: $.gulp.lastRun('img') })
            .pipe($.gulp.dest($.config.root + '/assets/img'));
    });
};
