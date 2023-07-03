const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    clean: true
  },

  mode: 'development',

  devtool: 'inline-source-map', // 打包的bundle.js显示效果,出现错误时能正确追踪到在源代码的位置

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'app.html',
      inject: 'body'
    })
  ],

  devServer: {
    static: './dist' // 执行（npx webpack-dev-server）server（热更新）的根目录
  }
}