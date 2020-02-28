const path = require('path');
const webpack = require('webpack');

module.exports = {
  devServer: {
    writeToDisk: true,
  },
  configureWebpack: {
    output: {
      library: 'single-spa-vue-app',
      libraryTarget: 'umd',
      filename: 'single-spa-vue-app.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 1,
      }),
    ],
  },
  chainWebpack: (config) => {
    config.externals([
      'bootstrap',
      'bootstrap-vue',
      'single-spa-vue',
      'vue',
      'vue-router',
      'vue-toastr',
    ]);
  },
};
