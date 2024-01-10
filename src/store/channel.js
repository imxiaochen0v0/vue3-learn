import axios from "axios"
import { defineStore } from "pinia"
import { ref } from "vue"

export const useChannelStore = defineStore('channel', () =>{
  const channelsList = ref([])

  // 获取频道列表
  const getChannels = async () => {
    const { data: { data } } = await axios.get('http://geek.itheima.net/v1_0/channels')
    channelsList.value = data.channels
    console.log('data :>> ', data)
  }

  return { 
    channelsList,
    getChannels 
  }
})