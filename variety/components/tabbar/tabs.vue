<template>
  <div class="tabs">
    <div class="tabs-header">
      <nav ref="navitem">
        <a
          href="javascript:;"
          v-for="(item, index) in menu"
          @click="change(index)"
          :class="index === activeIndex ? 'active' : ''"
          :key="index"
        >
          {{item}}
        </a>
        <b class="line" :style="styles"></b>
      </nav>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabs',

  data () {
    return {
      activeIndex: 0,
      menu: [],
      isFixed: false
    }
  },
  computed: {
    styles () {
      const width = window.innerWidth / this.menu.length
      return {
        left: width * this.activeIndex + width / 4 + 'px',
        width: width / 2 + 'px'
      }
    }
  },
  mounted () {
    this.$children = this.$children.filter((child) => {
      return child.$vnode.tag.indexOf('tab-pane') !== -1
    })
    this.initMenu()
  },
  methods: {
    initMenu () {
      this.menu = this.$children.map(child => child.label)
      this.$children[0].isShow = true
    },
    change (index) {
      this.activeIndex = index
      this.$children.forEach((item, i) => {
        if (index === i) {
          item.isShow = true
        } else {
          item.isShow = false
        }
      })
      this.$emit('change', index)
    }
  }
}
</script>

<style lang='scss' scoped>
.tabs{
  width:100%;
  height:auto;
  .tabs-header{
    width:100%;
    height:100px;
    nav{
      width:100%;
      display: flex;
      line-height: 100px;
      position: relative;
      background: #FFFFFF;
      box-shadow: inset 0 -1px 0 0 #EBEBEB;
      &.isFixed{
        position: fixed;
        background-color: #Fff;
        top:0;
        left:0;
        z-index: 99;
      }
      a{
        flex:1;
        font-size: 28px;
        font-family: PingFangSC-Regular;
        color: #333333;
        text-align: center;
        text-decoration: none;
        &.active{
          color: #F2922F;
        }
      }
    }
    .line{
      width:auto;
      height:4px;
      background: #F2922F;
      position: absolute;
      bottom:0;
      left:0;
      transition: left .5s ease;
    }
  }
}
</style>
