
// Plagins
const avif = require('gulp-avif');
const webp = require('gulp-webp');
const newer = require('gulp-newer');
const imagemin = require('gulp-imagemin');


const Img = () => {
    return $.gulp.src($.path.image.src)
        .pipe(newer($.path.image.src + '../'))
        .pipe(avif({ quality: 50 }))

        .pipe($.gulp.src($.path.image.src))
        .pipe(newer($.path.image.src + '../'))
        .pipe(webp())

        .pipe($.gulp.src($.path.image.src))
        .pipe(newer($.path.image.src + '../'))
        .pipe(imagemin([
            imagemin.mozjpeg({ quality: 50, progressive: true }),
            imagemin.optipng({ optimizationLevel: 5 }),
        ], {
            verbose: true
        }))

        .pipe($.gulp.dest($.path.image.dest))
        .pipe($.browserSync.stream())
}


module.exports = Img;