const webpack = require('webpack');
const path = require('path');

const commonConfig = require('./webpack.config.common')

const config = Object.assign({}, commonConfig, {
    entry: {
        bundle: './src/entry'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js'
    }
})


module.exports = config;
