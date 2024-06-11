import Vue from "vue";
import App from "./App.vue"; //引入根组件
//三级联动组件--全局组件
import TypeNav from "@/pages/Home/TypeNav";
//第一个参数：全局组件的名字 第二个参数：全局组件
Vue.component(TypeNav.name, TypeNav);
//引入路由
import router from "./router";
import { reqCategoryList } from "@/api";
reqCategoryList();
new Vue({
  render: (h) => h(App),
  //注册路由:KV一致，router小写
  //注册路由信息，当这里书写router的时候，组件身上拥有$route,$router属性
  router,
}).$mount("#app"); //根组件挂载到挂载点上
