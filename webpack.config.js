const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const path = require('path');

module.exports = {
    entry: {
        main:'./src/index.js',
        user:'./src/index.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            //html源文件路径
            template: path.resolve(__dirname, "./src/index.html"),
            //编译之后的html文件名
            filename:"main.html",
            hash:true,
            minify:{
                //去除html中的空白字符
                collapseWhitespace:true,
                removeComments:true,
                removeEmptyAttributes:true
            },
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./src/index.html"),
            filename:"user.html",
            hash:true,
            minify:{
                //去除html中的空白字符
                collapseWhitespace:true,
                removeComments:true,
                removeEmptyAttributes:true
            },
            chunks: ['user']
        }),
        new ExtractTextPlugin("style.css")
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: "css-loader"
            })
        }, {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                extractCSS: true
            }
        }]
    }
};