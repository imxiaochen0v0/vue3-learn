<script setup>
import { useCountStore } from "@/store/counter"
import { storeToRefs } from "pinia";

const countStore = useCountStore()
const { doubleCount } = storeToRefs(countStore)
</script>

<template>
  <div class=''>
    子组件1- {{ countStore.count }} - {{ doubleCount }}
    <button @click="countStore.addCount">+</button>
  </div>
</template>

<style scoped>

</style>