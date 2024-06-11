const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    open: true, // 自动打开浏览器
    // 指定使用的浏览器（可以是 Chrome 的具体路径）
    open: "Google Chrome",
    proxy: {
      "/api": {
        target: "http://gmall-h5-api.atguigu.cn",
      }, //数据来源于哪台服务器
      changeOrigin: true, // 是否改变请求源}, //从webpack官方文档爬取代理配置，浏览器和后端之间建立中间，解决跨域问题
    },
  },
});

// module.exports = {
//   lintOnSave: false,
//   devServer: {
//     proxy: {
//       "/api": {
//         target: "http://gmall-h5-api.atguigu.cn",
//       },
//     },
//   },
// };

// vue.config.js 或 webpack.config.js
