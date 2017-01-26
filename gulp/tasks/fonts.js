(function(){
    'use strict';

    module.exports = function() {
        return $.gulp.src($.config.fontsInput)
               .pipe($.gulp.dest($.config.fontsOutput))
    }
}());