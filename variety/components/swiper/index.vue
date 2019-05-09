<template>
  <div class="swiper-container" :class="swipeid">
    <div class="swiper-wrapper">
      <!-- 存放具体的轮播内容 -->
      <slot name="swiper-con"></slot>
    </div>
    <!-- 分页器 -->
    <div :class="{'swiper-pagination':pagination}"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  name: 'm-swipe',
  props: {
    swipeid: {
      type: String,
      default: ''
    },
    effect: {
      type: String,
      default: 'slide'
    },
    loop: {
      type: Boolean,
      default: false
    },
    direction: {
      type: String,
      default: 'horizontal'
    },
    pagination: {
      type: Boolean,
      default: true
    },
    paginationType: {
      type: String,
      default: 'bullets'
    },
    autoPlay: {
      type: Number,
      default: 3000
    }
  },
  data () {
    return {

    }
  },
  mounted () {
    var that = this
    this.dom = new Swiper('.' + that.swipeid, {
      loop: that.loop, // 循环
      pagination: { // 分页器
        el: '.swiper-pagination',
        bulletClass: 'swiper-pagination-bullet'
      },
      paginationType: that.paginationType, // 分页类型
      autoPlay: that.autoPlay, // 自动播放
      direction: that.direction, // 方向
      effect: that.effect, // 特效
      disableOnInteraction: false, // 用户操作swiper之后，不禁止autoplay
      observer: true, // 修改swiper自己或子元素时，自动初始化swiper
      observeParents: true // 修改swiper的父元素时，自动初始化swiper
    })
  },
  methods: {}
}
</script>

<style lang='scss' scoped>

</style>
