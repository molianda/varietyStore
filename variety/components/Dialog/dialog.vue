<template>
  <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOute" appear>
    <div class="dialog-wrap" v-show="visibility">
      <transition
       enter-active-class="animated fadeIn"
       leave-active-class="animated fadeOute" 
       appear
       @after-leave="afterLeave"
      >
        <div class="dialog-box" v-show="visibility">
          <header>
            <h2>{{title}}</h2>
            <a href="javascript:;" @click="close">×</a>
          </header>
          <div>
            <slot></slot>
          </div>
          <footer>
            <button @click="cancel" v-if="!noCancel" class="cancel">取消</button>
            <button @click="success" v-if="!noSuccess" class="sure">确定</button>
          </footer>
        </div>
      </transition>
    </div>
  </transition>
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
    },
    noSuccess: {
      type: Boolean,
      default: false
    },
    noCancel: {
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
      this.close()
    },
    success () {
      this.$emit('success')
      this.close()
    },
    close () {
      this.$emit('update:visibility', false)
    },
    afterLeave () {
      this.$emit('afterLeave')
    }
  }
}
</script>

<style lang='scss' scoped>
.dialog-wrap{
  width:100vw;
  height:100vh;
  background:rgba(0,0,0,.5);
  position: absolute;
  top:0;
  left:0;
  display:flex;
  .dialog-box{
    width:80%;
    max-width: 500px;
    background: #fff;
    border-radius: 5px;
    margin:auto;
    text-align:center;
    header{
      position: relative;
      margin:10px 0;
      a{
        color:black;
        position: absolute;
        font-size: 30px;
        right:10px;
        top:0;
      }
    }
    footer{
      margin:10px 0;
      button{
        padding:5px 15px;
        margin:0 5px;
        color:#fff;
        border-radius: 5px;
        &.cancel{
          background: rgb(240, 94, 94);
        }
        &.sure{
          background: #4c4ce7;
        }
      }
    }
  }
}
</style>
