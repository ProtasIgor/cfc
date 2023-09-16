
// Plagins
const svgsprite = require('gulp-svg-sprite');


const Sprite = () => {
    return $.gulp.src($.path.sprite.src)
        .pipe(svgsprite({
            mode: {
                stack: {
                    dest: 'info-svg',
                    sprite: '../sprite.svg',
                    example: true
                }
            }
        }))
        .pipe($.gulp.dest($.path.sprite.dest))
        .pipe($.browserSync.stream())
}


module.exports = Sprite;