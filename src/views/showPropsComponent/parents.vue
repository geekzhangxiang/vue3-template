<template>
   <div>
     <van-button type="success" @click="changeVal">父组件改变传递给子组件的值</van-button>
   </div>
  <message ref="msgBox" :title="state.title" @sendMsg="getValue"></message>
  <!-- <div>
    <Button type="success" @click="getDevice">发送到数据仓库的信息</Button>
    <div>{{device}}</div>
  </div> -->
</template>

<script lang="ts" setup>
import { computed, onMounted, reactive, ref} from "vue"
import {useStore} from "vuex"
import message from "./child.vue"
// import message from "./children.vue"
let msgBox= ref()
let state= reactive({
  title: "8999999"
});

const changeVal=()=>{
  state.title="未来有无限可能"
}


const getValue=(val)=>{
   console.log("得到子组件发送的值", val)
}

onMounted(()=>{
  // 父组件中通过ref调用子组件中的属性或者方法
  console.log("111111",msgBox.value.getNewInfo())
})

// const store= useStore();

// let device= computed(()=> store.state.settings.device)
// const getDevice=()=>{
//    store.dispatch("settings/toggleDevice", "android")
// }

</script>

<style>

</style>