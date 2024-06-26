//引入mockjs模块
import Mock from "mockjs";
//引入json文件,json数据格式和图片默认对外暴露
import banner from "./banner.json";
import floor from "./floor.json";

// mock方法，第一个参数是请求的地址，第二个参数是请求的数据
Mock.mock("/mock/banner", { code: 200, data: banner });
Mock.mock("/mock/floor", { code: 200, data: floor });
