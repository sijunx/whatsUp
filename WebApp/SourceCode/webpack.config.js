const path = require('path');
const webpack = require('webpack');

module.exports = {

    entry: [
        path.join(__dirname, 'App/App.jsx')
    ],
    output: {
        path: path.join(__dirname, 'dist/'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.png', '.jpg']
    },
    resolveLoader: {root: path.join(__dirname, 'node_modules')},
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel'
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpg)$/,
                loader: 'url-loader?limit=10000'
            }
        ]
    },

    babel: {
        presets: ['es2015', 'react'],
        compact: false
    }
    //,
    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin({
    //         compress: {warnings: false}
    //     }),
    //     new webpack.DefinePlugin({
    //         'process.env': {
    //             'NODE_ENV': JSON.stringify('production')
    //         }
    //     })
    // ]
};