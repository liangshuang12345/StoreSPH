<template>
  <div class="swiper-container" ref="cur">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for='(carousel, index) in list' :key='carousel.id'>
        <img :src="carousel.imgUrl">
      </div>

    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from 'swiper';
export default {
  name: 'Carousel',
  props: ['list'],
  watch: {
    list: {
      immediate: true,//无论如何，立即监听一次，因为数据没有发生变化，父传子
      handler() {
        this.$nextTick(() => {
          var mySwiper =
            new Swiper(
              this.$refs.cur,
              {
                loop: true, // 循环模式选项
                // 如果需要分页器
                pagination: {
                  el: '.swiper-pagination',
                  clickable: true,
                },
                // 如果需要前进后退按钮
                navigation: {
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                },
              });
        });
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>