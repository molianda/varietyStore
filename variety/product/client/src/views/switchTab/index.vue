<template>
  <div class="tab_page">
    <router-view></router-view>
    <FooterNav :menu="menu"/>
  </div>
</template>

<script>
/* import FooterNav from 'FooterNav' */
export default {
  name: '',

  data () {
    return {
      menu: [{
        name: '首页',
        path: '/firstpage',
        icon: 'first'
      }, {
        name: '购物车',
        path: '/shopcar',
        icon: 'shop'
      }, {
        name: '我的',
        path: '/mine',
        icon: 'mine'
      }]
    }
  },

  methods: {},

  components: {
    /* FooterNav */
  }
}
</script>

<style lang='scss' scoped>

</style>
