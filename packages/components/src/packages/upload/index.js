import CoUpload from './src/upload.vue'

/* istanbul ignore next */
CoUpload.install = function (Vue) {
  Vue.component(CoUpload.name, CoUpload)
}

export default CoUpload
