<script setup>
import { computed, ref } from 'vue';

const list = ref([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
const computedList = computed(() => {
  return list.value.filter(item => item > 2)
})
const handleClick = () => {
  list.value.push(11)
}
</script>

<template>
  <div class=''>
    <h1>computed计算属性</h1>
    <div>list: {{ list }}</div>
    <div>computedList: {{ computedList }}</div>
    <button @click="handleClick">修改</button>
  </div>
</template>

<style lang='scss' scoped></style>