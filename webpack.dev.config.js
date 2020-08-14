const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/factor.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename:'./release/bundle.js'  // release 会自动创建
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html', // bundle.js 会自动注入
            filename: 'index.html'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, "release"),  // 根目录
        open: true,  // 自动打开浏览器
        port: 9000  // 端口
    },
    module: {
        rules: [{
            test: /\.js?$/,
            exclude: /(node_modules)/,
            loader: 'babel-loader'
        }]
    },
    devtool: 'inline-source-map'
}