
// Plagins
const fonter = require('gulp-fonter');
const ttf2woff2 = require('gulp-ttf2woff2');


const Font = () => {
    return $.gulp.src($.path.font.src)
        .pipe(fonter({
            formats: ['woff', 'ttf']
        }))
        .pipe(ttf2woff2())
        .pipe($.gulp.dest($.path.font.dest))
        .pipe($.browserSync.stream())
}


module.exports = Font;