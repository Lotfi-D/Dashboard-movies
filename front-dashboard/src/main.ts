import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'
import router from './router'
import { ElLoading } from 'element-plus'
import 'element-plus/dist/index.css'
import 'tailwindcss/tailwind.css'
import './assets/style.css'; 

const pinia = createPinia();
pinia.use(piniaPluginPersistedState)
createApp(App).use(router).use(pinia).use(ElLoading).mount('#app')
