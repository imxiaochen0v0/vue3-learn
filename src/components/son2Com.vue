<script setup>
import { useCountStore } from "@/store/counter"

const countStore = useCountStore()
</script>

<template>
  <div class=''>
    子组件2- {{ countStore.count }}
    <button @click="countStore.subCount">-</button>
  </div>
</template>

<style scoped></style>