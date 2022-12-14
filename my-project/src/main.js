import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import './index.css'
import router from './routes'
import store from './store'
import 'tw-elements';

createApp(App).use(router).use(store).mount('#app')
