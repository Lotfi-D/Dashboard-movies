import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia';
import router from './router'
import { ElLoading } from 'element-plus';
import 'element-plus/dist/index.css';
import 'tailwindcss/tailwind.css'

const pinia = createPinia();

createApp(App).use(router).use(pinia).use(ElLoading).mount('#app')
