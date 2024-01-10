// new Vue() 创建一个应用实例 => createApp()
// 将创建实例封装 保证每个实例的独立封闭性
import { createApp } from 'vue'
import { createPinia } from 'pinia' 
import App from './App.vue'

const pinia = createPinia() // 创建pinia实例
const app = createApp(App) // 创建根实例

app.use(pinia)
app.mount('#app') // mount挂载点 #app(id为app的盒子)
