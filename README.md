# 项目说明

## 运行项目
+ 安装依赖包：npm i , 国内可以使用淘宝镜像：cnpm i
+ 开发、测试：npm run dev
+ 构建生产环境：npm run build

## autoprefixer使用步骤：
+ autoprefixer是postcss的一个插件，没有用过postcss的童鞋查看文档了解postcss的用途
    - [postcss中文文档](https://github.com/postcss/postcss/blob/HEAD/README.cn.md)
+ 安装2个包：
    - npm i postcss-loader autoprefixer -D
+ webpack.config.js同级创建一个postcss.config.js文件作为postcss的配置文件，在该文件中编写相关配置：
```js
    module.exports = {
        plugins: [
            //引入自动添加前缀的插件
            require('autoprefixer')
        ]
    }
```
+ 在webpack的配置文件中：
    - 在编译css的loader中添加：'postcss-loader'
+ 对于VUE单页应用程序，还需要进行如下配置，才能处理.vue文件中的样式
    - 参考vue官网：https://vue-loader.vuejs.org/zh-cn/features/postcss.html
    - 在vue-loader的options节点中添加：
    ```js
                postcss: [
                    require('autoprefixer')({
                        /*配置相关的浏览器支持*/
                        browsers: [
                            "last 30 versions",
                            "Android >= 4.0"
                        ]
                    })
                ]
    ```
    - 其中：
        - `require('autoprefixer')`表示导入autoprefixer包
        - browsers表示需要支持的浏览器列表（参考：https://github.com/ai/browserslist#queries）