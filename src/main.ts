import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/base.css'
import './assets/css/main.styl'
import BaseComponents from './components/base'
import BaseDirective from './directive'
import { vant } from "@/config/vant.config.js"


const app = createApp(App)
// 全局组件
app.use(BaseComponents)
app.use(BaseDirective)
vant(app)
app.use(store).use(router).mount('#app')
