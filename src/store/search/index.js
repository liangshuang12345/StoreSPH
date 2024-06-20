import { reqGetSearchInfo } from "@/api";
//search的仓库
const state = {
  searchList: {},
};
const mutations = {
  GETSEARCHLIST(state, searchList) {
    state.searchList = searchList;
  },
};
const actions = {
  async getSearchList({ commit }, params) {
    //params使用户派发action的时候传递过来的
    let result = await reqGetSearchInfo(params);
    if (result.code === 200) {
      commit("GETSEARCHLIST", result.data);
    }
  },
};
const getters = {
  goodsList(state) {
    return state.searchList.goodsList || []; //没网情况下可以返回空数组避免未定义导致的报错
  },
  // 当前形参是当前仓库的state
  trademarkList(state) {
    return state.searchList.trademarkList || [];
  },
  attrsList(state) {
    return state.searchList.attrsList || [];
  },
};
export default {
  state,
  actions,
  mutations,
  getters,
};
