<script setup>
import { onMounted } from 'vue';

// beforeCreate create直接放在 setup 中执行
const getList = () => {
  setTimeout(() => {
    console.log('发送请求')
  }, 2000)
}
getList()

// 写成函数可以调用多次
onMounted(async () => {
  console.log('第一次执行onMounted')
})
onMounted(async () => {
  console.log('第二次执行onMounted')
})
</script>

<template>
  <div class=''>

  </div>
</template>

<style lang='scss' scoped></style>