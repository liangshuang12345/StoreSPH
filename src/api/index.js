import requests from "./request";
import mockRequests from "./mockAjax";
// 三级联动的文档
//  /api/product/getBaseCategoryList  get 无参数

export const reqCategoryList = () =>
  requests({ url: "/product/getBaseCategoryList", method: "get" });

//获取banner（Home轮播图接口)
export const reqGetBannerList = () => mockRequests.get("/banner");

//获取floor数据
export const reqFloorList = () => mockRequests.get("/floor");
