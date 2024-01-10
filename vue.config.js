const { defineConfig } = require('@vue/cli-service');
import { defineConfig } from 'vite';
module.exports = defineConfig({
  base: '/',
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/styles/vue.scss";`,
      },
    },
  },
});
