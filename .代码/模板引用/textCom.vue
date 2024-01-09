<script setup>
import { ref } from 'vue';

const count = ref(520)
const sayHi = () => {
  console.log('你好')
}

defineExpose({
  count, 
  sayHi
})
</script>

<template>
  <div class=''>
    测试组件 - {{ count }}
  </div>
</template>

<style lang='scss' scoped>

</style>