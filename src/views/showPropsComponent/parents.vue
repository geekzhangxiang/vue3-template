<template>
  <message title="父组件中发送的值" @sendMsg="getValue"></message>
  <!-- <div>
    <Button type="success" @click="getDevice">发送到数据仓库的信息</Button>
    <div>{{device}}</div>
  </div> -->
</template>

<script lang="ts" setup>
import { computed} from "vue"
import {useStore} from "vuex"
import {Button} from "vant"
import message from "./child.vue"
// import message from "./children.vue"

const getValue=(val)=>{
   console.log("得到子组件发送的值", val)
}

// const store= useStore();

// let device= computed(()=> store.state.settings.device)
// const getDevice=()=>{
//    store.dispatch("settings/toggleDevice", "android")
// }

</script>

<style>

</style>