const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    splash: './src/renderer/splash/index.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'splash.html',
      template: 'src/renderer/splash/index.html',
      chunks: ['splash']
    })
  ]
}
