<script setup>
const props = defineProps({
  car: String,
  money: Number
})
const emit = defineEmits([
  'changeMoney'
])
console.log('🚀 ~ props:', props.car)
console.log('🚀 ~ props:', props.money)

const buy = () => {
  emit('changeMoney', 100)
}
</script>

<template>
  <div class='sonCom'>
    <h2>子组件
      <button @click="buy">花钱</button>
    </h2>
    {{ car }} - {{ money }}
  </div>
</template>

<style scoped>
.sonCom{
  border: 1px solid pink;
  padding: 25px;
}

button{
  width: 80px;
  height: 30px;
  border: none;
  border-radius: 10px;
  background-color: #00CED1	;
  color: white;
  font-size: 16px;
}
</style>