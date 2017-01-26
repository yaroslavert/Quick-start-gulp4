'use strict';

module.exports = function() {
    $.gulp.task('server', function() {
        $.browserSync.init({
            open: false,
            server: root
        });

        $.browserSync.watch([$.config.root + '/**/*.*', '!**/*.css'], $.browserSync.reload);
    });
};
