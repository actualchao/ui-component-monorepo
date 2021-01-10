import CoImg from './src/CgImg'
/* istanbul ignore next */
CoImg.install = function (Vue) {
  Vue.component(CoImg.name, CoImg)
}

export default CoImg
