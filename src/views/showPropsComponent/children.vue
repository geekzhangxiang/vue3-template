<template>
  <h2>{{props.title}}</h2>
  <div>
    <Button type="success" @click="handleMsg">发送信息</Button>
  </div>
  <div>
    <Button type="success" @click="getDevice">发送到数据仓库的信息</Button>
    <div>{{device}}</div>
  </div>
</template>

<script lang="ts" setup>
import {defineProps, defineEmits, computed} from "vue"
import {Button} from "vant"
import {useStore} from "vuex"
const props= defineProps({
    title: String
})
const emit= defineEmits(["sendMsg"]);

const handleMsg= ()=>{
  emit("sendMsg", "未来你好")
}

const store= useStore();
// 箭头函数这种写法自动携带返回值，加{}需要return
let device= computed(()=> store.state.settings.device)
const getDevice=()=>{
   store.dispatch("settings/toggleDevice", "android")
}





</script>

<style>

</style>