<script setup>
import { inject } from 'vue';

const message = inject('message')
const count = inject('count')
const changeCount = inject('changeCount')
const clickBtn = () => {
  changeCount(5201314)
}
</script>

<template>
  <div class=''>
    <h3>底层组件 - {{ message }} - {{ count }}</h3>
    <button @click="clickBtn">修改count</button>
  </div>
</template>

<style scoped>

</style>