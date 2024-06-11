<template>
  <div>
    <Header></Header>
    <!-- 书写路由组件出口 -->
    <router-view></router-view>
    <!-- Home,search显示,login,register隐藏 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
//引入
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: '',//组件的名称
  components: {//组件所以来的其他组件
    Header,
    Footer
  }
}
</script>

<style scoped></style>