<script setup>
import centerCom from '@/components/centerCom.vue'
import { provide, ref } from 'vue'

// 1. 跨层传递普通数据
provide('message', 'Hello World!')

// 2. 跨层传递响应式数据
const count = ref(100)
provide('count', count)
setTimeout(() => {
  count.value = 520
}, 2000)

// 3. 跨层传递方法
provide('changeCount',(newCount) => {
  count.value = newCount
})
</script>

<template>
  <div class=''>
    <h1>顶层组件</h1>
    <centerCom></centerCom>
  </div>
</template>

<style scoped>

</style>