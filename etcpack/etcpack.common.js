const QuickPaperLoaderPlugin = require('@etcpack/quickpaper-loader-plug');
const pkg = JSON.parse(require('fs').readFileSync('./package.json'));
const CommonjsPlug = require('@etcpack/commonjs-plug');

module.exports = {

    // 打包入口
    entry: './src/entry.js',

    // 打包出口
    output: 'build/main@v' + pkg.version + '.js',

    loader: [{
            test: /\.js$/,
            handler: ['@etcpack/babel-loader']
        },
        {
            test: /\.(css|scss)$/,
            handler: ['@etcpack/quickpaper-style-loader', '@etcpack/scss-loader']
        }, {
            test: /\.paper$/,
            handler: ['@etcpack/quickpaper-loader']
        }
    ],
    plug: [
        new QuickPaperLoaderPlugin(),
        new CommonjsPlug()
    ]
};