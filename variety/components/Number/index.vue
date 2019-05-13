<template>
  <div>
    <span @click="lessen">-</span>
    <input v-model="val" />
    <span @click="add">+</span>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 10000
    },
    value: ''
  },
  watch: {
    val (newVal) {
      this.val = parseInt(newVal)
      this.val = this.val > this.max ? this.max : this.val
      this.val = this.val < this.min ? this.min : this.val
      this.$emit('input', this.val)
    },
    value (newVal) {
      this.val = newVal
    }
  },
  data () {
    return {
      val: this.min
    }
  },
  created () {
    this.val = this.value ? this.value : this.min
  },
  methods: {
    lessen () {
      this.val -= 1 
    },
    add () {
      this.val= parseInt(this.val) + 1
    }
  }
}
</script>

<style lang='scss' scoped>

</style>
