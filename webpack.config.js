const webpack = require("webpack");

module.exports = {
    entry: __dirname + '/src/App.js',
    output: {
        path: __dirname + '/www',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js(x?)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }
        ]
    },
    devServer: {
        contentBase: __dirname + '/www',
        stats: 'minimal'
    }
}
