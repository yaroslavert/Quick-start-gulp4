'use strict';

module.exports = function() {
    $.gulp.task('font', function() {
        return $.gulp.src('./source/font/**/*')
               .pipe($.gulp.dest($.config.root + '/assets/font'))
    });
};