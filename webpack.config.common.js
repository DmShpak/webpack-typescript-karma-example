const path = require('path')
const config = {
    resolve: {
        extensions: ['.ts'],
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: 'ts-loader'
            }
        ]
    },
    devtool: 'source-map'
};

module.exports = config;
