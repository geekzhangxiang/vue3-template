<template>
  <h2>{{props.title}}</h2>
  <div>
    <van-button type="success" @click="handleMsg">发送信息</van-button>
    <van-button type="success" @click="addValue">调用事件</van-button>
  </div>
  <div>
    <van-button type="success" @click="getDevice">发送到数据仓库的信息</van-button>
    <div>{{device}}</div>
  </div>
</template>
<script lang="ts" setup>      //此写法为vue3.2写法
import {defineProps, defineEmits, computed, reactive, watch, defineExpose} from "vue"
import {useStore} from "vuex"
// import { Button } from "vant";
const store= useStore();
const props= defineProps({
    title: String
})
const emit= defineEmits(["sendMsg"]);
const state= reactive({
       arr:[
        {name: "zhangsan", age: 26},
        {name: "lisi", age: 25},
      ],
      obj:{
        name: "wangwu",
        age: 28
      }
});

    // 监听数组或者对象
    watch(()=> state.obj, (newValue, oldValue) => {
      console.log("当前获得的新值", newValue)
    }, {deep: true})



const handleMsg= ()=>{
  emit("sendMsg", "未来你好")
}

const addValue=()=>{
    state.obj.age++
};

const getNewInfo=()=>{
      return "梦想需要有实际行动，才能实现"
}

defineExpose({
  getNewInfo
})


// 箭头函数这种写法自动携带返回值，加{}需要return
let device= computed(()=> store.state.settings.device)
const getDevice=()=>{
   store.dispatch("settings/toggleDevice", "android")
}





</script>

<style>

</style>