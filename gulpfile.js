global.$ = {

    // Plagins
    gulp: require('gulp'),
    browserSync: require('browser-sync').create(),

    // Config
    app: require('./config/app'),
    path: require('./config/path'),
}

// Plagins
const html = require('./tasks/html');
const pug = require('./tasks/pug');
const style = require('./tasks/style');
const script = require('./tasks/script');
const imgmin = require('./tasks/imgmin');
/* const favicon = require('./tasks/favicon'); */
const font = require('./tasks/font');
const svgmin = require('./tasks/svgmin');
const sprite = require('./tasks/sprite');
const clean = require('./tasks/clean');
const build = require('./tasks/build');
const server = require('./tasks/server');


const watcher = () => {
    $.gulp.watch(($.app.isProjectWithPug) ? $.path.pug.watch : $.path.html.watch, ($.app.isProjectWithPug) ? pug : html)
        .on('change', $.browserSync.reload);

    $.gulp.watch($.path.style.watch, style);
    $.gulp.watch($.path.script.watch, script);
    $.gulp.watch($.path.image.watch, imgmin);
    $.gulp.watch($.path.svg.watch, svgmin);
    $.gulp.watch($.path.sprite.watch, sprite);
}

const reliase = $.gulp.series($.gulp.parallel(clean, $.app.isProjectWithPug ? pug : html,
    style, script, imgmin, svgmin, sprite), build);
const dev = $.gulp.parallel(watcher, server);

if ($.app.isProjectWithPug) {
    exports.pug = pug;
} else {
    exports.html = html;
}
exports.style = style;
exports.script = script;
/* exports.favicon = favicon; */
exports.font = font;
exports.imgmin = imgmin;
exports.svgmin = svgmin;
exports.sprite = sprite;
exports.build = build;
exports.clean = clean;
exports.watch = watcher;
exports.dev = dev;
exports.reliase = reliase;
exports.server = server;

exports.default = dev;