<script setup>
const modelValue = defineModel()

</script>

<template>
  <div class=''>
    <input type="text"
    :value="modelValue"
    @input="modelValue = $event.target.value"
    >
  </div>
</template>

<style scoped>

</style>