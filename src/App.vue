<script setup>
import { useCountStore } from "@/store/counter"
import son1Com from '@/components/son1Com.vue'
import son2Com from '@/components/son2Com.vue'

const countStore = useCountStore()
</script>

<template>
  <div class=''>
    <h1>根组件
      - {{ countStore.count }}
      - {{ countStore.msg }}
    </h1>
    <son1Com></son1Com>
    <son2Com></son2Com>
  </div>
</template>

<style scoped>

</style>