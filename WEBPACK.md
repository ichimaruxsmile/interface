# webpack

## 文件夹
1. dist 分发代码, 指在构建过程中, 经过最小化和优化后产生的输出结果. 它将最终被浏览器所加载
2. src 源代码, 用于开发与编辑

## 管理资源
1. 在 webpack 出现之前，前端开发人员会使用 grunt 和 gulp 等工具处理资源, 并将它们从 /src 文件夹移动到 /dist 或 /build 目录中。JavaScript 模块也遵循同样的方式。
2. webpack 通过 loader, 将非JS模块编译, 使得依赖图中的所有资源也会进入打包, 最终放入/dist

## 管理输出
1. 多入口
2. 插件 html-webpack-plugin
3. manifest??

## 开发环境
1. 客户端开发环境，搭配插件 webpack-dev-server
2. 服务端开发环境，搭配插件 webpack-dev-middleware（两者有什么区别呢？）
3. 设置 webpack mode
4. 设置 source map（通过 devtool 字段）