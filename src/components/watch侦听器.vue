<script setup>
import { ref, watch } from 'vue';

const count = ref(0)
const nickName = ref('imxiaochen')
const changeCount = () => {
  count.value++
}
const changeNickName = () => {
  nickName.value = 'imxiaochen0v0'
}

// 1、监听单个数据
/* watch(count, (newValue, oldValue) => {
  console.log("🚀 ~ watch ~ oldValue:", oldValue);
  console.log("🚀 ~ watch ~ newValue:", newValue);
}) */

// 2、监听多个数据
/* watch([count, nickName], (newValue, oldValue) => {
  console.log("🚀 ~ watch ~ oldValue:", oldValue);
  console.log("🚀 ~ watch ~ newValue:", newValue);
}) */

// 3、immediate 立即执行
/* watch(count, (newValue, oldValue) => {
  console.log("🚀 ~ watch ~ oldValue:", oldValue);
  console.log("🚀 ~ watch ~ newValue:", newValue);
},{
  immediate: true
}) */

// 4、deep深度监听 默认为浅层 监听不到复杂类型
const userInfo = ref({
  name: 'imxiaochen',
  age: 18
})
const changeUserInfo = () => {
  userInfo.value.age++
  // userInfo.value.name = 'imxiaochen0v0'
}
/* watch(userInfo, (newValue, oldValue) => {
  console.log("🚀 ~ watch ~ oldValue:", oldValue);
  console.log("🚀 ~ watch ~ newValue:", newValue);
}, {
  deep: true
}) */

// 5、监听对象中的某个属性(无需开启deep深度监听)
watch(() => userInfo.value.age, (newValue, oldValue) => {
  console.log("🚀 ~ watch ~ oldValue:", oldValue);
  console.log("🚀 ~ watch ~ newValue:", newValue);
})
</script>

<template>
  <div class=''>
    <div>{{ count }}</div>
    <button @click="changeCount">改数字</button>
    <br><br>
    <div>{{ nickName }}</div>
    <button @click="changeNickName">改昵称</button>
    <br><br>
    <div>----- deep深度监听 -----</div>
    <div>{{ userInfo }}</div>
    <button @click="changeUserInfo">修改userInfo</button>
  </div>
</template>

<style scoped></style>