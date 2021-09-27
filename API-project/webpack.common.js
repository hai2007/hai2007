const QuickPaperLoaderPlugin = require('quick-paper/loader-plug/index.js');
const pkg = JSON.parse(require('fs').readFileSync('./package.json'));

module.exports = {
    entry: ['./src/entry.js'],
    output: {
        path: __dirname,
        filename: 'build/main@v' + pkg.version + '.js'
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
            test: /\.(png|jpg|jpeg|gif|bmp|svg)$/,
            loader: [{
                loader: "url-loader",
                options: {
                    name: "dist/[path][name].[ext]",
                    context: "src/assets",
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
