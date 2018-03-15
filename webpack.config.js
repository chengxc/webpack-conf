const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./src/index.html"),
            hash:true
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