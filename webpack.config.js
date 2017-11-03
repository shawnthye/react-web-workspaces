'use strict';

process.env.BABEL_ENV = 'development';

const path = require('path');

const OUT_PATH = path.resolve('./build');
const PUBLIC_PATH = '/assets/';
const DEVTOOL = 'source-map';

const IS_PROD = false;

module.exports = [];

module.exports.push({
    name: 'js-components',
    entry: {
        'packages/button/index': [path.resolve('./packages/button/index.js')]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: PUBLIC_PATH,
        filename: '[name].' + (IS_PROD ? 'min.' : '') + 'js',
        libraryTarget: 'umd',
        library: ['mdc', '[name]'],
    },
    devtool: DEVTOOL,
    module: {
        rules: [{
            test: /\.js$/,
            exclude: [/(node_modules)/],
            loader: 'babel-loader',
            options: {
                cacheDirectory: true,
                presets: [
                    'react-app'
                ]
            }
        }],
    },
    plugins: [
    ],
});