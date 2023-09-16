
// Plagins
const newer = require('gulp-newer');
const imagemin = require('gulp-imagemin');


const Svg = () => {
    return $.gulp.src($.path.svg.src)
        .pipe(newer($.path.svg.src + '../'))
        .pipe(imagemin([
            imagemin.svgo({
                plugins: [
                    { removeViewBox: true },
                    { cleanupIDs: false }
                ]
            })
        ], {
            verbose: true
        }))
        .pipe($.gulp.dest($.path.svg.dest))
        .pipe($.browserSync.stream())
}


module.exports = Svg;