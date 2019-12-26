import Vue from 'vue'
import Element from '../src/index'
import App from './App.vue'
import '../packages/theme/src/index.scss'

Vue.use(Element)

new Vue({ render: (h) => h(App) }).$mount('#app')
