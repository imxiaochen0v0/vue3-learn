// new Vue() 创建一个应用实例 => createApp()
// 将创建实例封装 保证每个实例的独立封闭性
import { createApp } from 'vue'
import { createPinia } from 'pinia' 
import persist from 'pinia-plugin-persistedstate' // 导入pinia持久化插件
import App from './App.vue'

const pinia = createPinia() // 创建pinia实例

const app = createApp(App) // 创建根实例

app.use(pinia)
pinia.use(persist)// 使用pinia持久化插件
app.mount('#app') // mount挂载点 #app(id为app的盒子)
