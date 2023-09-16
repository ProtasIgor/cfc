

const Build = () => {
    return $.gulp.src(Object.values($.path.build.src),
        {
            base: $.path.build.base,
            allowEmpty: true,
        })
        .pipe($.gulp.dest($.path.build.dest))
}


module.exports = Build;