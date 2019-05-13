<template>
  <div>
    <button @click="showDialog = true">点击</button>
    <button @click="alertDialog">alert</button>
    <button @click="confirmDialog">confirm</button>
    <button @click="promptDialog">prompt</button>
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
import NumberInput from 'Number'
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
    },
    no () {
      console.log('点击了no')
    },
    alertDialog () {
      this.$alert('alert').then(() => {
        console.log('点击了确认了')
      }).catch(() => {
        console.log('取消')
      })
    },
    confirmDialog () {
      this.$confirm('confirm').then(() => {
        console.log('确认')
      }).catch(() => {
        console.log('取消')
      })
    },
    promptDialog () {
      this.$prompt({
        type: NumberInput,
        text: 'prompt'
      }).then(() => {
        console.log('确认')
      }).catch(() => {
        console.log('取消')
      })
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
