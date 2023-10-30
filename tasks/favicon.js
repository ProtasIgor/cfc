
// Plagins
const favicons = require('gulp-favicons');
const filter = require('gulp-filter');

const Favicon = () => {
    return $.gulp.src($.path.favicon.src)
        .pipe(favicons({
            appName: 'CFC',
            appShortName: 'CFC',
            appDescription: 'CFC',
            developerName: 'Igor',
            developerURL: '',
            background: '#020307',
            path: 'favicon/',
            url: '',
            display: 'standalone',
            orientation: 'portrait',
            scope: '/',
            start_url: '',
            version: 1.0,
            logging: false,
            html: 'index.html',
            pipeHTML: true,
            replace: true,
        }))
        .pipe(filter([
            "favicon.ico",
            "favicon-32x32.png",
            "apple-touch-icon-180x180.png",
            "android-chrome-192x192.png",
            "android-chrome-512x512.png",
            "manifest.json"]))
        .pipe($.gulp.dest($.path.favicon.dest));
}


module.exports = Favicon;