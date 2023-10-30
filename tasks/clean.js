
// Plagins
var clean = require('gulp-clean');


const Clean = () => {
    return $.gulp.src($.path.clean.src, { read: false, "allowEmpty": true })
        .pipe(clean())
        .pipe($.gulp.dest($.path.clean.dest))
}


module.exports = Clean;