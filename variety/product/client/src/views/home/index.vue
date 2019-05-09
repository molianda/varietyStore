<template>
  <div>
    <button @click="showDialog = true">点击</button>
    <Dialog
     title="标题"
     @success="ok"
     @cancel="no"
     :visibility.sync="showDialog"
    >
      内容
    </Dialog>
  </div>
</template>

<script>
import Dialog from 'Dialog'

export default {
  name: '',

  data () {
    return {
      showDialog: false
    }
  },

  methods: {
    ok () {
      console.log('点击了OK')
      this.showDialog = false
    },
    no () {
      console.log('点击了no')
      this.showDialog = false
    }
  },
  components: {
    Dialog
  }
}
</script>

<style lang='scss' scoped>

</style>
