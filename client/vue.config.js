const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  assetsDir: 'static',
  outputDir: 'dist',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/globals.scss";`
      }
    }
  }
})
