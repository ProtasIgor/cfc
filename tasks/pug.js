
// Plagins
const pug = require('gulp-pug');


const Pug = () => {
    return $.gulp.src($.path.pug.src)
        .pipe(pug($.app.pug))
        .pipe($.gulp.dest($.path.pug.dest))
}

module.exports = Pug;