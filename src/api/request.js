import axios from "axios";

//利用axios方法create创建实例，为修改做方便
const requests = axios.create({
  //配置新axios
  //baseURL: "http://gmall-h5-api.atguigu.cn/api", //基础路径
  timeout: 5000, //超时时间
});
//请求拦截器，在请求前返回请求对象包含请求头
requests.interceptors.request.use((config) => {
  //config配置对象，包含请求头header
  return config;
});

//响应拦截器，在响应后返回响应对象
requests.interceptors.response.use(
  (res) => {
    return res.data;
  },
  (error) => {
    return Promise.reject(new Error("faile"));
  }
);

export default axios;
