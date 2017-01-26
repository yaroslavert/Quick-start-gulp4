module.exports={
    autoprefixerConfig  : ['last 40 version', '> 1%', 'ie 8', 'ie 9', 'Opera 12.1'],
    sassInput           : './source/style/*.scss',
    sassOutput          : root+'/assets/css',
    foundationCss       : './source/style/vendor',
    imgInput            : './source/images/**/*.*',
    imgOutput           : root+'/assets/img',
    jsInput             : './source/js/*.js',
    jsOutput            : root+'/assets/js',
    pugInput            : './source/template/pages/*.*',
    pugOutput           : root,
    svgInput            : './source/svg/*.svg',
    svgOutput           : root+'/assets/sprite'
};