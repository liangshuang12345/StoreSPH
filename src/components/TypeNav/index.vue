<template>
  <div class="type-nav">
    <div class="container">
      <div @mouseleave='leaveshow' @mouseenter='entershow'>
        <h2 class="all">全部商品分类</h2>
        <!-- 三级联动 -->
        <!-- 过渡动画 -->
        <transition name='sort'>
          <div class="sort" v-show="show">
            <div class="all-sort-list2" @click='goSearch'>
              <div class="item" v-for=' (c1, index) in categoryList' :key='c1.categoryId'
                :class='{ cur: currentIndex === index }'>
                <h3 @mouseenter='changeIndex(index)'>
                  <a :data-categoryName="c1.categoryName" :data-category1Id='c1.categoryId'>{{ c1.categoryName }}</a>
                  <!-- <router-link to='/search'>{{ c1.categoryName }}</router-link> -->
                </h3>
                <!-- 二、三级分类 -->
                <div class="item-list clearfix">
                  <div class="subitem" v-for='(c2, index) in c1.categoryChild' :key='c2.categoryId'>
                    <dl class="fore">
                      <dt>
                        <a :data-categoryName="c2.categoryName" :data-category2Id='c2.categoryId'>{{ c2.categoryName
                          }}</a>
                        <!-- <router-link to='/search'>{{ c2.categoryName }}</router-link> -->
                      </dt>
                      <dd>
                        <em v-for='(c3, index) in c2.categoryChild' :key='c3.categoryId'>
                          <a :data-categoryName="c3.categoryName" :data-category3Id='c3.categoryId'>{{ c3.categoryName
                            }}</a>
                          <!-- <router-link to='/search'>{{ c3.categoryName }}</router-link> -->
                        </em>
                      </dd>
                    </dl>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
// lodash里的所有功能都被引入
import throttle from 'lodash/throttle';

export default {
  name: 'TypeNav',
  data() {
    return {
      //存储用户鼠标移到哪个一级分类
      currentIndex: null,
      show: true
    }
  },
  //组件挂载完毕，可以向服务器发请求
  mounted() {
    //当组件挂载完毕
    if (this.$route.path != '/home') {
      this.show = false;
    }
  },
  computed: {
    //右侧需要的是一个函数，当使用这个计算属性的时候，右侧函数会立即执行一次
    //注入一个参数state，也就是大仓库中的数据
    // ...mapState({
    //   categoryList: (state) => state.home.categoryList
    // })
    ...mapState({
      categoryList: (state) => {
        return state.home.categoryList;
      }
    })
  },
  methods: {
    //鼠标进入，改变currentIndex
    //若用户操作很快，如一下子滑下来，若存在大量业务，可能会出现卡顿现象，因此使用节流
    changeIndex: throttle(function (index) {
      this.currentIndex = index
    }, 50),
    //一级分类鼠标移出
    leaveIndex() {
      this.currentIndex = -1
    },
    goSearch(e) {
      //进行事件委派
      //在父节点上确认如何使a点击触发事件，并区分是一级还是二三级标签 

      //把a标签加上自定义属性
      let element = e.target;//获取到发出事件的节点,验证是否带有data
      //节点有一个dataset属性，可以获取节点的自定义属性
      //控制台会自动转换成小写
      let { categoryname, category1id, category2id, category3id } = element.dataset;
      if (categoryname) {
        //整理路由跳转的参数
        let location = { name: 'search' };
        let query = { categoryName: categoryname };
        //一级分类二级三级的a标签
        if (category1id) {
          query.category1id = category1id
        } else if (category2id) {
          query.category2id = category2id
        } else if (category3id) {
          query.category3id = category3id
        }
        //整理完参数
        if (this.$route.params) {
          location.params = this.$route.params;
          location.query = query;
          this.$router.push(location);
        }

      }

    },
    entershow() {
      if (this.$route.path != '/home') {
        this.show = true;
      }
    },
    //鼠标离开的时候
    leaveshow() {
      if (this.$route.path != '/home') {
        this.show = false
      }
      this.currentIndex = null
    }
  }
}
</script>

<style lang="scss" scoped lang='less'>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;
    }

    //过渡动画样式
    .sort-enter {
      opacity: 0;
    }

    .sort-enter-to {
      opacity: 1;
    }

    .sort-enter-active {
      transition: all .2s linear;
    }

    .all-sort-list2 {
      .item {
        h3 {
          line-height: 30px;
          font-size: 14px;
          font-weight: 400;
          overflow: hidden;
          padding: 0 20px;
          margin: 0;

          a {
            color: #333;
          }
        }

        .item-list {
          display: none;
          position: absolute;
          width: 734px;
          min-height: 460px;
          background: #f7f7f7;
          left: 210px;
          border: 1px solid #ddd;
          top: 0;
          z-index: 9999 !important;

          .subitem {
            float: left;
            width: 650px;
            padding: 0 4px 0 8px;

            dl {
              border-top: 1px solid #eee;
              padding: 6px 0;
              overflow: hidden;
              zoom: 1;

              &.fore {
                border-top: 0;
              }

              dt {
                float: left;
                width: 54px;
                line-height: 22px;
                text-align: right;
                padding: 3px 6px 0 0;
                font-weight: 700;
              }

              dd {
                float: left;
                width: 415px;
                padding: 3px 0 0;
                overflow: hidden;

                em {
                  float: left;
                  height: 14px;
                  line-height: 14px;
                  padding: 0 8px;
                  margin-top: 5px;
                  border-left: 1px solid #ccc;
                }
              }
            }
          }
        }

        &:hover {
          .item-list {
            display: block;
          }
        }
      }

      .cur {
        background-color: skyblue;
      }
    }
  }
}
</style>