<template>
  <div class="dialog-wrap" v-show="visibility">
    <div class="dialog-box">
      <header>
        <h2>{{title}}</h2>
        <a href="javascript:;" @click="close">关闭</a>
      </header>
      <div>
        <slot></slot>
      </div>
      <footer>
        <button @click="cancel">取消</button>
        <button @click="success">确定</button>
      </footer>
    </div>
  </div>
</template>

<script>
/**
 * 
 * 用例
 * <Dialog
 *  title="标题"
 * :visibility="true"
 * 
 * @success=""
 * @cancel=""
 * >
 *  内容
 * </Dialog>
 */
export default {
  name: 'Dialog',
  props: {
    title: {
      type: String,
      default: ''
    },
    visibility: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {

    }
  },

  methods: {
    cancel () {
      this.$emit('cancel')
    },
    success () {
      this.$emit('success')
    },
    close () {
      this.$emit('update:visibility', false)
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
