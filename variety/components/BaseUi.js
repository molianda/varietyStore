import Dialog from './Dialog/index.js'
import FooterNav from './FooterNav'
import SvgIcon from './icons'
import MSwipe from './swiper'
import ArititleList from './artitleList'

let components = {
  FooterNav,
  SvgIcon,
  MSwipe,
  ArititleList
}

export default {
  install (Vue) {
    Vue.use(Dialog)
    for (let key in components) {
      Vue.component(key, components[key])
    }
  }
}