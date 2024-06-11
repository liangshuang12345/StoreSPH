import Vue from "vue";
import VueRouter from "vue-router";
// 使用插件
Vue.use(VueRouter);

// 引入路由组件
import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Login from "@/pages/Login";
import Register from "@/pages/Register";

// 配置路由

// 修改 push 方法，解决重复点击路由报错的问题
// 先把 VueRouter 原型对象的 push 保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;

// 重写 push 方法
// 第一个参数：告诉 push 方法往哪里跳转（传递哪些参数）
// 第二个参数：成功回调
// 第三个参数：失败回调

VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    // call || apply 区别：相同点：都可以调用函数一次，都可以篡改函数的上下文一次
    // 不同点：call 和 apply 传递参数：call 传递参数用逗号隔开，apply 方法执行，传递数组
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

export default new VueRouter({
  // 配置路由
  routes: [
    {
      path: "/home",
      component: Home,
      meta: {
        show: true,
      },
    },
    {
      path: "/search/:keyword?", // 后边添加？代表 params 参数可传可不传
      component: Search,
      meta: { show: true },
      name: "search",
    },
    {
      path: "/login",
      component: Login,
      meta: {
        show: false,
      },
    },
    {
      path: "/register",
      component: Register,
      meta: {
        show: false,
      },
    },
    {
      // 重定向，当访问根路径时，自动跳转到 home 页面
      path: "/",
      redirect: "/home",
    },
  ],
});
