<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'svg-icon',
  props: {
    name: {
      type: String,
      required: true
    },
    className: {
      type: String
    },
    size: {
      type: Number,
      default: 20
    }
  },
  computed: {
    iconName () {
      return `#${this.name}`
    },
    svgClass () {
      if (this.className) {
        return 'svg-icon' + this.className
      } else {
        return 'svg-icon'
      }
    }
  }
}
</script>

<style>
.svg-icon {
  width: 43.9px;
  height: 43.9px;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
