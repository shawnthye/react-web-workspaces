'use strict';

process.env.BABEL_ENV = 'development';

const path = require('path');

const OUT_PATH = path.resolve('./build');
const PUBLIC_PATH = '/assets/';

const IS_PROD = false;

module.exports = [];

module.exports.push({
    name: 'js-components',
    entry: {
        button: [path.resolve('./button/index.js')]
    },
    output: {
        path: OUT_PATH,
        publicPath: PUBLIC_PATH,
        filename: '[name].' + (IS_PROD ? 'min.' : '') + 'js',
        libraryTarget: 'umd',
        library: ['mdc', '[name]'],
    },
    // devtool: DEVTOOL,
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader',
            options: {
                cacheDirectory: true,
                presets: [
                    'react-app',
                    'babel-preset-react',
                    // require.resolve('babel-preset-react')
                ],
                plugins: ["transform-runtime"]
            }
        }],
    },
    plugins: [
        // createBannerPlugin(),
    ],
});