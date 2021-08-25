const VueLoaderPlugin = require('vue-loader').VueLoaderPlugin;
const resolve = require('path').resolve;

module.exports = {
    entry: ['./src/entry.js'],
    output: {
        path: __dirname,
        filename: 'build/main.js',
        chunkFilename: 'build/bundle.[name].[chunkhash].js'
    },
    optimization: {
        concatenateModules: true
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: ['vue-loader']
        }, {
            test: /\.js$/,
            //只在src文件夹下查找
            include: [resolve(__dirname, 'src')],
            //不会去查找的路径
            exclude: /node_modules/,
            loader: "babel-loader"
        }, {
            test: /\.css$/,
            use: ['vue-style-loader', 'css-loader', 'postcss-loader', './scss-loader.js']
        }, {
            test: /\.(png|jpg|jpeg|gif)$/,
            use: [{
                loader: "url-loader",
                options: {
                    publicPath: "../",
                    name: "build/[path][name].[ext]",
                    limit: 5000
                }
            }]
        }]
    },
    plugins: [
        new VueLoaderPlugin()
    ]
};
