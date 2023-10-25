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
        watch: true,
        module: {
            rules: [
                {
                    test: /\.s[ac]ss$/,
                    use:
                        [
                            'style-loader',
                            'css-loader',
                            {
                                loader: 'sass-loader',
                                options: {
                                    implementation: require.resolve("sass"),
                                }
                            }
                        ]
                },
                {
                    test: /\.css$/,
                    use:
                        [
                            'style-loader',
                            'css-loader',
                        ]
                },
            ]
        },
        output: {
            filename: 'script.min.js',
        },
        mode: isProduction ? "production" : "development",
    }
}