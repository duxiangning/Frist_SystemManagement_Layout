import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import {ArrowDown} from '@element-plus/icons-vue'
// import * as ElementPlusIconsVue from '@element-plus/icons-vue'



import '@/assets/css/global.css'

createApp(App).use(store).use(router)
    .use(ElementPlus, {locale: zhCn, size:'small'})
    .component('arrow-down',ArrowDown)
    .mount('#app')










