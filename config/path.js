'use strict'

const pathBaseSource = './build';
const pathBaseDestination = './app';

const path = {

    html: {
        src: pathBaseSource + `/html/index.html`,
        watch: [pathBaseSource + `/html/components/*`, pathBaseSource + `/html/index.html`],
        dest: pathBaseSource + '/',
    },
    pug: {
        src: pathBaseSource + `/html/pug/index.pug`,
        watch: pathBaseSource + `/html/pug/*`,
        dest: pathBaseSource + '/',
    },
    style: {
        src: pathBaseSource + `/scss/style.scss`,
        watch: pathBaseSource + '/scss/**/*',
        dest: pathBaseSource + `/css`,
    },
    script: {
        src: pathBaseSource + `/js/src/index.js`,
        watch: [pathBaseSource + '/js/**/*', '!' + pathBaseSource + '/js/script.min.js'],
        dest: pathBaseSource + `/js`,
    },
    favicon: {
        src: pathBaseSource + '/favicon/src/favicon.*',
        dest: pathBaseSource + '/favicon',
    },
    font: {
        src: pathBaseSource + `/fonts/src/*`,
        dest: pathBaseSource + `/fonts`,
    },
    image: {
        src: pathBaseSource + '/images/src/*',
        watch: pathBaseSource + '/images/src/*',
        dest: pathBaseSource + `/images`,
    },
    svg: {
        src: pathBaseSource + '/svg/src/*',
        watch: pathBaseSource + '/svg/src/*',
        dest: pathBaseSource + `/svg`,
    },
    sprite: {
        src: [pathBaseSource + 'svg/*',
        '!' + pathBaseSource + 'svg/sprite.svg'],
        watch: [pathBaseSource + 'svg/*',
        '!' + pathBaseSource + 'svg/sprite.svg'],
        dest: pathBaseSource + `/svg`,
    },
    clean: {
        src: pathBaseDestination + '/',
        dest: pathBaseDestination,
    },
    build: {
        base: pathBaseSource,
        src: {
            html: pathBaseSource + '/index.html',
            css: pathBaseSource + '/css/style.min.css',
            font: pathBaseSource + '/fonts/*',
            img: pathBaseSource + '/images/*',
            svg: pathBaseSource + '/svg/sprite.svg',
            js: pathBaseSource + '/js/script.min.js',
            favicons: pathBaseSource + '/favicon/*.*',
        },
        dest: pathBaseDestination,
    },
    server: pathBaseSource,
};

module.exports = path;