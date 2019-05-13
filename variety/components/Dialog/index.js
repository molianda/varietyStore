import Dialog from './dialog'
export default {
  install (Vue, options) {
    Vue.component('Dialog', Dialog)
    //三种形式的弹框
    Vue.prototype.$alert = (str) => {
      return new Promise((resolve, reject) => {
        const DialogClass = Vue.extend(Dialog)
        const DialogComponent = new DialogClass({
          propsData: {
            title: str,
            visibility: true,
            noCancel: false
          },
          created () {
            this.$on('update:visibility', (visibility) => {
              // vm.$on( event, callback )
              // 监听当前实例上的自定义事件。事件可以由vm.$emit触发。回调函数会接收所有传入事件触发函数的额外参数。
              this.visibility = visibility
            })

            this.$on('success', () =>{
              resolve()
            })

            this.$on('cancel', () => {
              reject()
            })

            this.$on('afterLeave', () => {
              this.$destroy()
            })
          },
          destroyed () {
            document.body.removeChild(this.$el)
          }
        })

        DialogComponent.$mount()
        document.body.appendChild(DialogComponent.$el)
      })
    }

    Vue.prototype.$confirm = (str) => {
      return new Promise((resolve, reject) => {
        const DialogClass = Vue.extend(Dialog)
        const DialogComponent = new DialogClass({
          propsData: {
            title: str,
            visibility: true
          },
          created () {
            this.$on('update:visibility', (visibility) => {
              // vm.$on( event, callback )
              // 监听当前实例上的自定义事件。事件可以由vm.$emit触发。回调函数会接收所有传入事件触发函数的额外参数。
              this.visibility = visibility
            })

            this.$on('success', () =>{
              resolve()
            })

            this.$on('cancel', () => {
              reject()
            })

            this.$on('afterLeave', () => {
              this.$destroy()
            })
          },
          destroyed () {
            document.body.removeChild(this.$el)
          }
        })

        DialogComponent.$mount()
        document.body.appendChild(DialogComponent.$el)
      })
    }

    Vue.prototype.$prompt = (options = {
      type: 'textarea',
      icon: '',
      text: ''
    }) => {
      return new Promise((resolve, reject) => {
        const DialogClass = Vue.extend(Dialog)
        const DialogComponent = new DialogClass({
          data () {
            return {
              value: ''
            }
          },
          propsData: {
            title: options.text,
            visibility: true
          },
          created () {
            this.initSlotVnode()
            this.$on('update:visibility', (visibility) => {
              // vm.$on( event, callback )
              // 监听当前实例上的自定义事件。事件可以由vm.$emit触发。回调函数会接收所有传入事件触发函数的额外参数。
              this.visibility = visibility
            })

            this.$on('success', () =>{
              resolve()
            })

            this.$on('cancel', () => {
              reject()
            })

            this.$on('afterLeave', () => {
              this.$destroy()
            })
          },
          destroyed () {
            document.body.removeChild(this.$el)
          },
          methods: {
            initSlotVnode () {
              console.log(options.type)
              let vnode = ''
              if (options.type === 'text') {
                this.$slots.default = this.$root.$createElement('input', {
                  type: options.type
                })
              } else if (options.type === 'textarea') {
                vnode = this.$root.$createElement('textarea')
              } else {
                console.log('this.value', this)
                vnode = this.$root.$createElement(options.type, {
                  domProps: {
                    value: this.value
                  },
                  on: {
                    input: function (val) {
                      this.value = val
                    }
                  }
                })
              }
              this.$slots.default = vnode
            }
          }
        })

        DialogComponent.$mount()
        document.body.appendChild(DialogComponent.$el)
      })
    }
  }
}