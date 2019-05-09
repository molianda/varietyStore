<template>
  <div>
    首页
    <tabs @change="tabchange">
      <tab-pane v-for="(item, index) in title" :key="index" :label="item">
        {{item}}
        <ArtitleList :list="list" :typeId="typeId" />
      </tab-pane>
    </tabs>
  </div>
</template>

<script>
import {Tabs, TabPane} from 'tabbar/index.js'
import ArtitleList from 'artitleList'
export default {
  name: '',

  data () {
    return {
      title: ['热卖商品', '店家推荐', '跳楼促销'],
      list: [{
        title: '呼叫客服的函数方克立是否开始机房的开始',
        size: '120G',
        num: '10.00'
      }, {
        title: '反倒是加工费大使馆附近的三',
        size: '120G',
        num: '10.00'
      }, {
        title: '特特图一他有几个好几个',
        size: '120G',
        num: '10.00'
      }, {
        title: '特特图一他有几个好几个',
        size: '120G',
        num: '10.00'
      }],
      typeId: 1
    }
  },

  methods: {
    tabchange (index) {
      console.log(index)
    }
  },
  components: {
    Tabs,
    TabPane,
    ArtitleList
  }
}
</script>

<style lang='scss' scoped>

</style>
