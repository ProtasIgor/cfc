
// Plagins
const fileinclude = require('gulp-file-include');
const htmlmin = require('gulp-htmlmin');
const size = require('gulp-size');


const Html = () => {
    return $.gulp.src($.path.html.src)
        .pipe(fileinclude())
        .pipe(size({ title: 'Before: ' }))
        .pipe(htmlmin($.app.htmlmin))
        .pipe(size({ title: 'After: ' }))
        .pipe($.gulp.dest($.path.html.dest))
}
module.exports = Html;