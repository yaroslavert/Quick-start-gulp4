'use strict';

global.root='./dist';

let getEnvironment=()=>{
    let  argv = process.argv[process.argv.length-1];
    if ( (process.argv.length <= 2) || (argv.indexOf('-')===-1) ) {
        return 'develop';
    }
    argv = argv.slice(argv.lastIndexOf('-')+1).toLocaleLowerCase();
    console.log(argv);
    let  MasivProd =['p','prod','production','productions'];
    if(MasivProd.indexOf(argv)!=-1){
        return 'production';
    }
    return 'develop';
}


global.$={
    package     : require('./package.json'),
    config      : require('./gulp/config'),
    path : {
        task            : require('./gulp/path/task'),
        cssFoundation   : require('./gulp/path/css.foundation'),
        jsFoundation    : require('./gulp/path/js.foundation'),
        watch			: require('./gulp/path/wath')	
    },
    gulp        : require('gulp'),
    rimraf      : require('rimraf'),
    browserSync : require('browser-sync'),
    environment : getEnvironment() || 'develop',
    gl          : require('gulp-load-plugins')()

};

$.path.task.forEach(function (taskpath) {
    require(taskpath)();
});

$.gulp.task('default',$.gulp.series(

    'clean',
    'libCss',
    'libJs',
    $.gulp.parallel(
    	'font',
        'sass',
        'img',
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
