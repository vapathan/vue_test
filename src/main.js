import '@/assets/css/app.css'

import FontAwesomeIcon from './plugins/fontawesome'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'



const app = createApp(App)
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')
