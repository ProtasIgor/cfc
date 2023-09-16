'use script';

const isProduction = global.process.argv.includes('--production');
const isDev = !isProduction;

module.exports = {
    isProd: isProduction,
    isDev: isDev,
    isProjectWithPug: undefined || false,
    htmlmin: {
        collapseWhitespace: isProduction,
    },
    pug: {
        pretty: isDev,
    },
    webpack: {
        mode: isProduction ? "production" : "development",
    }
}