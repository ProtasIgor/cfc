
// Plagins
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const csso = require('gulp-csso');
const gcmq = require('gulp-group-css-media-queries');
const rename = require("gulp-rename");
const size = require('gulp-size');


const Style = () => {
    return $.gulp.src($.path.style.src)
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(autoprefixer())
        .pipe(size({ title: 'Before: ' }))
        .pipe(csso())
        .pipe(gcmq())
        .pipe(sass({ outputStyle: 'compressed' }))
        .pipe(size({ title: 'After: ' }))
        .pipe(rename('style.min.css'))
        .pipe($.gulp.dest($.path.style.dest))
        .pipe($.browserSync.stream())
}


module.exports = Style;