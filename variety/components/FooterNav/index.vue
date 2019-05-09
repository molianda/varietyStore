<template>
  <footer class="footer_nav">
    <router-link v-for="(item, index) in menu" :key="index" :to="item.path" active-class="active">
      <svg-icon :name="$route.path === item.path ? item.icon + '_check' : item.icon"></svg-icon>
      <span>{{item.name}}</span>
    </router-link>
  </footer>
</template>

<script>
export default {
  name: 'FooterNav',

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

  methods: {}
}
</script>

<style lang='scss' scoped>
  .footer_nav{
    width: 100%;
    height:98px;
    background: #fff;
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    box-shadow: 0 -4px 6px 0 rgba(0,0,0,0.06);
    a{
      flex:1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      font-size: 20px;
      color:#333333;
      text-decoration: none;
      &.active{
        color:#F2922F;
      }
    }
  }
</style>
