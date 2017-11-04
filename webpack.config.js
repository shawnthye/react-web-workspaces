'use strict';

//process.env.BABEL_ENV = 'development';

const path = require('path');

const OUT_PATH = path.resolve('./build');
const PUBLIC_PATH = '/assets/';
const DEVTOOL = 'source-map';

const IS_DEV = process.env.BABEL_ENV === 'development';
const IS_PROD = false;

module.exports = [];
// module.exports = [{
//     name: 'js-all',
//     entry: path.resolve('./packages/react-material-components/index.js'),
//     output: {
//         path: OUT_PATH,
//         publicPath: PUBLIC_PATH,
//         filename: 'react-material-components.' + (IS_DEV ? '' : 'min.') + 'js',
//         libraryTarget: 'umd',
//         library: 'mdc',
//     },
//     // See https://github.com/webpack/webpack-dev-server/issues/882
//     // Because we only spin up dev servers temporarily, and all of our assets are publicly
//     // available on GitHub, we can safely disable this check.
//     devServer: {
//         disableHostCheck: true,
//     },
//     devtool: DEVTOOL,
//     module: {
//         rules: [{
//             test: /\.js$/,
//             exclude: [/(node_modules)/],
//             loader: 'babel-loader',
//             options: {
//                 cacheDirectory: true,
//                 presets: [
//                     'react-app'
//                 ]
//             },
//         }],
//     }
// }];

module.exports.push({
    name: 'js-components',
    entry: {
        button: [path.resolve('./packages/button/index.js')],
        checkbox: [path.resolve('./packages/checkbox/index.js')]
    },
    output: {
        path: OUT_PATH,
        publicPath: PUBLIC_PATH,
        filename: '[name].' + (IS_DEV ? '' : 'min.') + 'js',
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