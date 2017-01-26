'use strict';

global.root='./dist';

global.$={
    package     : require('./package.json'),
    config      : require('./gulp/config'),
    path : {
        task            : require('./gulp/path/task'),
        cssFoundation   : require('./gulp/path/css.foundation')
    },
    gulp        : require('gulp'),
    rimraf      : require('rimraf'),
    browserSync : require('browser-sync'),
    gl          : require('gulp-load-plugins')()

};

$.path.task.forEach(function (taskpath) {
    require(taskpath)();
});

$.gulp.task('default',$.gulp.series(

    'clean',
    $.gulp.parallel(
        'css:foundation',
        'sass',
        'copy:image',
        'js',
        'svg',
        'pug'
    ),
    'zip',
    $.gulp.parallel(
        'server',
        'watch'
    )
));
