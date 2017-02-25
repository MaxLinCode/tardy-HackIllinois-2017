const webpack = require("webpack");

module.exports = {
    entry: __dirname + '/src/app.js',
    output: {
        path: __dirname + '/www',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/, 
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            }
        ]
    },
    devServer: {
        contentBase: __dirname + '/www',
        stats: 'minimal'
    }
}
