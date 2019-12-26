// const path = require('path')

// const webpack = require('webpack')
// const { getCssVar } = require('./script/cssVarHelper')

// const CopyWebpackPlugin = require('copy-webpack-plugin')

// console.log(webpack.Compiler.hooks)
// const publicPath = '/'

// const api = `${publicPath}api`
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
module.exports = {
  lintOnSave: true,

  // publicPath,

  // template: 'examples/index.html',
  // entry: 'examples/main.js',

  // outputDir: 'lib',
  // filenameHashing: false,
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'examples/index.html',
    },
  },
  chainWebpack (config) {
    // config.plugin('analyzer').use(BundleAnalyzerPlugin).end()
    // config.entry('app').clear()
    //   .add('./test/main.js')
    //   .end()
    const FILE_RE = /\.(vue|js|ts|svg)$/

    config.module.rule('svg').issuer((file) => !FILE_RE.test(file))
    config.module
      .rule('svg-sprite')
      .test(/\.svg$/)
      .issuer((file) => FILE_RE.test(file))
      .use('svg-sprite')
      .loader('svg-sprite-loader')

    // config.plugin('vendor').use(webpack.DllReferencePlugin, [{ manifest: require(path.resolve('manifest/vendor.json')) }])
  },
  devServer: {
    port: 8080,
    disableHostCheck: true,
  },
}
