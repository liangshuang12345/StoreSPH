import axios from "axios";
import nprogress from "nprogress";
import "nprogress/nprogress.css"; // 引入进度条样式

// 利用 axios 方法 create 创建实例，为修改做方便
const requests = axios.create({
  baseURL: "/mock", // 基础路径
  timeout: 5000, // 超时时间
});

// 请求拦截器，在请求前返回请求对象包含请求头
requests.interceptors.request.use(
  (config) => {
    nprogress.start(); // 进度条开始
    return config;
  },
  (error) => {
    nprogress.done(); // 在请求错误时结束进度条
  }
);

// 响应拦截器，在响应后返回响应对象
requests.interceptors.response.use(
  (res) => {
    nprogress.done(); // 进度条结束
    return res.data;
  },
  (error) => {
    nprogress.done(); // 在响应错误时结束进度条
    return Promise.reject(new Error("fail"));
  }
);

export default requests;
