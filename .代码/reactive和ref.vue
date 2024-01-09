<script setup>
// reactive: 接受一个对象类型的数据 ，返回一个响应式的代理对象
import { reactive, ref } from 'vue';

const state = reactive({
  count: 100
})
const handleClick = () => {
  state.count++
}

const count = ref(100)
const handleClick2 = () => {
  count.value++
}
</script>

<template>
  <div>
    <h1>reactive</h1>
    <div>{{ state.count }}</div>
    <button @click="handleClick">+1</button>

    <h1>ref</h1>
    <div>{{ count }}</div>
    <button @click="handleClick2">+1</button>
  </div>
</template>

<style scoped></style>