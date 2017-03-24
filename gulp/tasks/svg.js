'use strict';

module.exports = function() {
    $.gulp.task('svg', function() {
        return $.gulp.src('./source/svg/*.svg')
            .pipe($.gl.svgmin({
                js2svg: {
                    pretty: true
                }
            }))
            .pipe($.gl.cheerio({
                run: function ($) {
                    $('[fill]').removeAttr('fill');
                    $('[stroke]').removeAttr('stroke');
                    $('[style]').removeAttr('style');
                },
                parserOptions: { xmlMode: true }
            }))
            .pipe($.gl.replace('&gt;', '>'))
            .pipe($.gl.svgSprite({
                mode: {
                    symbol: {
                        sprite: "../sprite.svg"
                    }
                }
            }))
            .pipe($.gulp.dest($.config.root+'/assets/sprite'))
    })
};
