import { createApp } from 'vue'

// new Vue() 创建一个应用实例 => createApp()
// 将创建实例封装 保证每个实例的独立封闭性
import App from './App.vue'

// mount挂载点 #app(id为app的盒子)
createApp(App).mount('#app')
