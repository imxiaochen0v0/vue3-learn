<script setup>
import sonCom from '@/components/sonCom.vue'
import { ref } from 'vue'

const money = ref(1000)
const addMoney = () => {
  money.value += 100
}
const handleChangeMoney = (val) => {
  money.value -= val
}
</script>

<template>
  <div class=''>
    <h1>父组件 - {{ money }}
      <button @click="addMoney">挣钱</button>
    </h1>
    <sonCom car="兰博基尼" :money="money" @changeMoney="handleChangeMoney"></sonCom>
  </div>
</template>

<style scoped>
button{
  width: 100px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background-color: #00CED1	;
  color: white;
  font-size: 18px;
}
</style>