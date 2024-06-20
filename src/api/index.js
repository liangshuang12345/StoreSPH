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

//获取搜索模块  /api/list post
//需要参数:
// {
//   "category3Id": "61",
//   "categoryName": "手机",
//   "keyword": "小米",
//   "order": "1:desc",
//   "pageNo": 1,
//   "pageSize": 10,
//   "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
//   "trademark": "4:小米"
// }
//params至少是个空对象
export const reqGetSearchInfo = (params) =>
  requests({ url: "/list", method: "post", data: params });
