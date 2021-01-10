import CoImg from './packages/img'
import CoUpload from './packages/upload'

import '@cgone/theme'

const components = {
  CoImg,
  CoUpload
}

export const name = process.env.VUE_APP_NAME
export const version = process.env.VUE_APP_VERSION
export const install = (Vue) => {
  Object.values(components).forEach(component => {
    Vue.component(component.name, component)
  })
}

export default {
  version: process.env.VUE_APP_VERSION,
  name: process.env.VUE_APP_NAME,
  install,
  ...components
}
