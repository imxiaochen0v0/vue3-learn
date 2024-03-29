import { defineStore } from "pinia"
import { ref, computed } from "vue"

// 定义store
export const useCountStore = defineStore('counter', () => {
  // 声明数据 state
  const count = ref(520)
  const msg = ref('Hello Pinia')

  // 声明操作数据的方法 actions
  const addCount = () => {
    count.value++
  }
  const subCount = () => {
    count.value--
  }

  // 声明基于属性派生的计算属性 computed
  const doubleCount = computed(() => count.value * 2)

  return { 
    count,
    msg,
    addCount,
    subCount,
    doubleCount
  }
}, {
  // persist: true // 开启当前模块数据持久化
  persist:{
    key: 'pinia-counter', // 本地存储的key
    paths: ['count'] // 需要持久化的数据
  }
})