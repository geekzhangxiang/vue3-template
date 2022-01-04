module.exports = {
  publicPath: process.env.BASE_URL,
  outputDir: "dist",
  productionSourceMap: false,
  css: {
    requireModuleExtension: true, // 是否开启CSSmodule并保留xxx.module.css后缀
    loaderOptions: {
      sass: {
        additionalData: `
        @use 'sass:math';
        @import "@/assets/scss/global.scss";`
      }
    }
  },
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