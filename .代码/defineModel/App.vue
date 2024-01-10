<script setup>
import MyInput from '@/components/MyInput.vue';
import { ref } from 'vue';

const txt = ref('imxiaochen')
</script>

<template>
  <div class=''>
    <MyInput v-model="txt"></MyInput>
    {{ txt }}
  </div>
</template>

<style scoped></style>