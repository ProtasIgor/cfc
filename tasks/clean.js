
// Plagins
var clean = require('gulp-clean');


const Clean = () => {
    return $.gulp.src($.path.clean.src, { read: false })
        .pipe(clean())
        .pipe($.gulp.dest($.path.clean.dest))
}


module.exports = Clean;