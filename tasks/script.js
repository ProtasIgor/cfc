
// Plagins
//const babel = require('gulp-babel');
const compiler = require('webpack');
const webpack = require('webpack-stream');
const size = require('gulp-size');


const Script = () => {
    return $.gulp.src($.path.script.src)
        .pipe(size({ title: 'Script size before: ' }))
        /* .pipe(babel()) */
        .pipe(webpack($.app.webpack, compiler))
        .pipe(size({ title: 'Script size after: ' }))
        .pipe($.gulp.dest($.path.script.dest))
        .pipe($.browserSync.stream())
}


module.exports = Script;