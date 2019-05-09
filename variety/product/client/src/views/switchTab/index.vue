<template>
  <div class="tab_page">
    <router-view></router-view>
    <FooterNav />
  </div>
</template>

<script>
import FooterNav from 'FooterNav'
export default {
  name: '',

  data () {
    return {

    }
  },

  methods: {},

  components: {
    FooterNav
  }
}
</script>

<style lang='scss' scoped>

</style>
