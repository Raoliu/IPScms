import { createApp } from 'vue'
import App from './App.vue'
import i18n from './language/i18n'
import ElementPlus from 'element-plus'
import './registerServiceWorker'
import router from './router'
import store from './store'

createApp(App).use(store).use(i18n).use(ElementPlus).use(router).mount('#app')
