module.exports = {
  publicPath: "./",
  outputDir: "dist",
  productionSourceMap: false,
  chainWebpack: config => {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
  },
  devServer: {
    port: 8010,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
  }
}