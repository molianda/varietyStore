<template>
  <div v-show="isShow">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tab-pane',
  props: {
    label: {
      type: String,
      default: '',
      required: true
    }
  },
  data () {
    return {
      isShow: false
    }
  },

  methods: {}
}
</script>

<style lang='scss' scoped>

</style>
