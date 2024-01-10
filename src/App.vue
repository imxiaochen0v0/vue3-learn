<script setup>
import son1Com from '@/components/son1Com.vue'
import son2Com from '@/components/son2Com.vue'
import { useCountStore } from "@/store/counter"
import { useChannelStore } from "@/store/channel"

const countStore = useCountStore()
const channelStore = useChannelStore()
</script>

<template>
  <div class=''>
    <h1>根组件
      - {{ countStore.count }}
      - {{ countStore.msg }}
    </h1>
    <son1Com></son1Com>
    <son2Com></son2Com>
    <hr>
    <button @click="channelStore.getChannels">获取频道数据</button>
    <ul>
      <li v-for='(item, index) in channelStore.channelsList' :key='index'>{{ item.name }}</li>
    </ul>
  </div>
</template>

<style scoped>

</style>