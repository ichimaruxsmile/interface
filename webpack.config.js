const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // 入口文件, 从入口文件出发收集依赖信息构建依赖图, 然后使用图生成一个优化过的bundle(main.js), 并保证它能按照正确顺序加载和执行
  entry: './src/index.js',

  // 生成文件
  output: {
    filename: 'bundle.js', // 文件的名称
    path: path.resolve(__dirname, 'dist'), // 文件存放位置
    clean: true, // 每次构建时, 清空dist文件夹中的内容
    publicPath: '/', // 服务端开发资源默认路径
  },

  // 资源模块
  module: {
    rules: [
      /**
       * 添加对CSS资源的编译
       */
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },

      /**
       * 内置资源模块可以处理图片
       */
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },

      /**
       * 处理字体资源
       */
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },

  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      title: '管理输出',
    }),
  ],

  // source map
  devtool: 'inline-source-map',

  // 客户端开发默认资源路径
  devServer: {
    static: './dist',
  },
  // 多入口时配置
  // optimization: {
  //   runtimeChunk: 'single',
  // },
};