<script setup>
import { onMounted, ref } from 'vue'
import textCom from '@/components/textCom.vue';

const inp = ref(null)
const clickBtn = () => {
  inp.value.focus()

}

const com = ref(null)
const getCom = () => {
  console.log(com.value.count)
  com.value.sayHi()
}
</script>

<template>
  <div class=''>
    <input type="text" ref="inp">
    <button @click="clickBtn">点击</button>
    <textCom ref="com"></textCom>
    <button @click="getCom">获取组件</button>
  </div>
</template>

<style scoped>

</style>