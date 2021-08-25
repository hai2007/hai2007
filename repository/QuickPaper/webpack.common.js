const QuickPaperLoaderPlugin = require('quick-paper/loader-plug/index.js');

module.exports = {
    entry: ['./src/entry.js'],
    output: {
        path: __dirname,
        filename: 'build/main.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }, {
            test: /\.paper$/,
            exclude: /node_modules/,
            loader: ['quick-paper/loader/index.js']
        }, {
            test: /\.(png|jpg|jpeg|gif|bmp)$/,
            loader: [{
                loader: "url-loader",
                options: {
                    name: "build/[path][name].[ext]",
                    limit: 5000
                }
            }]
        }, {
            test: /\.(css|scss)$/,
            loader: ['quick-paper/style-loader/index.js', 'css-loader', 'postcss-loader', './scss-loader.js']
        }]
    },
    plugins: [
        new QuickPaperLoaderPlugin()
    ]
};
