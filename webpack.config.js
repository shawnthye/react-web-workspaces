'use strict';

const IS_DEV = process.env.BABEL_ENV === 'development';
const IS_PROD = false;

const path = require('path');

const OUT_PATH = path.resolve(__dirname, 'packages');
const PUBLIC_PATH = '/assets/';
const DEVTOOL = IS_DEV ? 'source-map' : false

module.exports = [{
    name: 'js-components',
    entry: {
        button: [path.resolve('./packages/button/index.js')],
        checkbox: [path.resolve('./packages/checkbox/index.js')]
    },
    output: {
        path: OUT_PATH,
        publicPath: PUBLIC_PATH,
        filename: '[name]/dist/index.' + (IS_DEV ? '' : 'min.') + 'js',
        libraryTarget: 'umd',
        library: ['react', '[name]']
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
    plugins: [],
}];

module.exports.push({
    name: 'js-all',
    entry: path.resolve('./packages/react-material-components/index.js'),
    output: {
        path: OUT_PATH,
        publicPath: PUBLIC_PATH,
        filename: 'react-material-components/dist/index.' + (IS_DEV ? '' : 'min.') + 'js',
        libraryTarget: 'umd',
        library: ['react', '[name]']
    },
    // See https://github.com/webpack/webpack-dev-server/issues/882
    // Because we only spin up dev servers temporarily, and all of our assets are publicly
    // available on GitHub, we can safely disable this check.
    devServer: {
        disableHostCheck: true,
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
            },
        }],
    }
});