
// Plagins
const babel = require('gulp-babel');
const webpack = require('webpack-stream');
const rename = require("gulp-rename");
const size = require('gulp-size');


const Script = () => {
    return $.gulp.src($.path.script.src)
        .pipe(size({ title: 'Script size before: ' }))
        .pipe(babel())
        .pipe(webpack($.app.webpack))
        .pipe(size({ title: 'Script size after: ' }))
        .pipe(rename('script.min.js'))
        .pipe($.gulp.dest($.path.script.dest))
        .pipe($.browserSync.stream())
}


module.exports = Script;