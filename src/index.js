import Button from '../packages/button/index.js'
import { capitalize } from './utils/transform'
import { COMPONENT_PREFIX } from './constant/bem'
import {
  b,
  e,
  m,
  s,
} from './utils/bem'

const components = [Button]

const install = function (Vue, opts = {}) {
  components.forEach((component) => {
    Vue.component(capitalize(COMPONENT_PREFIX) + component.name, component)
  })

  Vue.prototype.$b = b
  Vue.prototype.$e = e
  Vue.prototype.$m = m
  Vue.prototype.$s = s
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  version: '1.0.0',
  install,
  Button,
}
