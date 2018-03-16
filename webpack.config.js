const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const path = require('path');

module.exports = {
    devServer: {
        //配置服务器的根目录
        contentBase: path.join(__dirname, "dist"),
        port: 8088,
        //编译成功立刻打开浏览器浏览
        open: true,
        // //反向代理
        // proxy: {
        //     "/api": "http://localhost:3000"
        // },
        //配置指定的ip
        // host: "192.168.69.2",
    },
    entry: {
        main: './src/index.js',
        user: './src/index.js'
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
            filename: "main.html",
            hash: true,
            minify: {
                //去除html中的空白字符
                collapseWhitespace: true,
                removeComments: true,
                removeEmptyAttributes: true
            },
            chunks: ['main']
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./src/index.html"),
            filename: "user.html",
            hash: true,
            minify: {
                //去除html中的空白字符
                collapseWhitespace: true,
                removeComments: true,
                removeEmptyAttributes: true
            },
            chunks: ['user']
        }),
        new ExtractTextPlugin("style.css")
    ],
    module: {
        rules: [{
            test: /\.css$/,
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({
                fallback: "style-loader",
                use: [{
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1,
                        }
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ]
            })
        }, {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                extractCSS: true,
                postcss: [
                    require('autoprefixer')({
                        //配置相关的浏览器支持
                        browsers: [
                            "last 30 versions",
                            "Android >= 4.0"
                        ]
                    })
                ]
            }
        }]
    }
};