<script setup>
import son1Com from '@/components/son1Com.vue'
import son2Com from '@/components/son2Com.vue'
import { useCountStore } from "@/store/counter"
import { useChannelStore } from "@/store/channel"
import { storeToRefs } from 'pinia';

const countStore = useCountStore()
const channelStore = useChannelStore()

const { count, msg } = storeToRefs(countStore)
const { channelsList } = storeToRefs(channelStore)
// 解构方法不需要 storeToRefs
const { getChannels } = channelStore
</script>

<template>
  <div class=''>
    <h1>根组件
      - {{ count }}
      - {{ msg }}
    </h1>
    <son1Com></son1Com>
    <son2Com></son2Com>

    <hr>

    <button @click="getChannels">获取频道数据</button>
    <ul>
      <li v-for='(item, index) in channelsList' :key='index'>{{ item.name }}</li>
    </ul>
  </div>
</template>

<style scoped>

</style>