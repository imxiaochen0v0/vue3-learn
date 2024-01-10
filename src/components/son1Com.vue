<script setup>
import { useCountStore } from "@/store/counter"

const countStore = useCountStore()
</script>

<template>
  <div class=''>
    子组件1- {{ countStore.count }} - {{ countStore.doubleCount }}
    <button @click="countStore.addCount">+</button>
  </div>
</template>

<style scoped>

</style>