module.exports={
    autoprefixerConfig  : ['last 40 version', '> 1%', 'ie 8', 'ie 9', 'Opera 12.1'],
    sassInput           : './source/style/*.scss',
    sassOutput          : root+'/assets/css',
    sassWathc           : './source/style/**/*.scss',
    foundationCss       : './source/style/vendor',
    imgInput            : './source/images/**/*.*',
    imgOutput           : root+'/assets/img',
    jsInput             : ['./source/js/vendor/*.js','./source/js/*.js'],
    jsOutput            : root+'/assets/js',
    jsFoundation        : './source/js/vendor',
    pugInput            : './source/template/pages/*.*',
    pugOutput           : root,
    pugWathc            : './source/template/**/*.*',
    svgInput            : './source/svg/*.svg',
    svgOutput           : root+'/assets/sprite',
    fontsInput          : './source/fonts/**/*.*',
    fontsOutput         : root+'/assets/fonts' 
};