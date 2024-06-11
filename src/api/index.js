//当前模块:所有Api接口进行统一管理
import requests from "./request";

//三级联动的文档
//  /api/product/getBaseCategoryList  get 五参数

export const reqCategoryList = () =>
  requests({ url: "/product/getBaseCategoryList", method: "get" });
//axios发请求返回的是promise对象  //函数体调用就可以发请求
