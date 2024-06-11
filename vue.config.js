const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    open: true, // 自动打开浏览器
    open: "Google Chrome", // 指定使用的浏览器
    proxy: {
      "/api": {
        target: "http://gmall-h5-api.atguigu.cn",
        changeOrigin: true,
        // 删除 pathRewrite，因为你需要保留 /api 前缀
      },
    },
  },
});
