const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './dist'),
    clean: true,
    assetModuleFilename: 'images/[contenthash][ext]' // 资源模块的文件名
  },

  mode: 'development',

  devtool: 'inline-source-map',

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'app.html',
      inject: 'body'
    })
  ],

  devServer: {
    static: './dist'
  },

  module: {
    rules: [
      {
        test: /\.png$/,
        type: 'asset/resource', // 图片url
        generator: {
          filename: 'images/[contenthash][ext]' // 和assetModuleFilename作用一样，但是优先级较高且只针对这一种生效
        }
      },

      {
        test: /\.svg$/,  // 图片的base64格式
        type: 'asset/inline'
      },

      {
        test: /\.txt$/,
        type: 'asset/source'
      },

      {
        test: /\.jpg$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 4 * 1024 * 1024 // 默认是8kb
          }
        }
      }
    ]
  }
}