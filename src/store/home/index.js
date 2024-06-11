import { reqCategoryList, reqGetBannerList, reqFloorList } from "@/api";
//home的仓库
const state = {
  //state默认值不能瞎写，返回值类型和默认值一致，也就是下面的中括号
  categoryList: [],
  //轮播图
  bannerList: [],
  floorList: [],
};
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
    //debug
  },
  GETBANNERLIST(state, bannerList) {
    state.bannerList = bannerList;
  },
  GETFLOORLIST(state, floorList) {
    state.floorList = floorList;
  },
};

const actions = {
  //通过APi里接口函数调用，向服务器发请求，获取服务器数据
  async categoryList({ commit }) {
    //三级联动
    let result = await reqCategoryList();
    if (result.code === 200) {
      commit("CATEGORYLIST", result.data);
    }
  },
  //获取首页轮播图的数据
  async getBannerList({ commit }) {
    let result = await reqGetBannerList(); //等待回调,await async
    if (result.code === 200) {
      commit("GETBANNERLIST", result.data);
    }
  },
  async getFloorList({ commit }) {
    let result = await reqFloorList();
    if (result.code === 200) {
      //提交mutation
      commit("GETFLOORLIST", result.data);
    }
  },
};

const getters = {};
export default {
  state,
  actions,
  mutations,
  getters,
};
