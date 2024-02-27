import './assets/scss/index.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import VueTheMask from 'vue-the-mask'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(VueTheMask)
app.use(createPinia())
app.use(router)

app.mount('#app')
