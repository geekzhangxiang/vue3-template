<template>
  <h2>{{ title }}</h2>
  <div class="box">
    <van-button type="success" @click="handleMsg">发送信息</van-button>
    <van-button type="success" @click="addValue">调用事件</van-button>
  </div>
  <div class="box">
    <van-button type="success" @click="getDevice">
      发送到数据仓库的信息
    </van-button>
    <div>{{ device }}</div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, watch,reactive } from "vue";
import { useStore } from "vuex";
import {MapsList} from "./type"
// import { Button } from "vant";
export default {
  name: "message",
  // components: {
  //   Button,
  // },
  props: {
    title: {
      type: String,
      default: "",
      required: true,
    }
  },
  /**
    * context包含3个属性
    * 
    * attrs：所有的非prop的attribute
      slots：父组件传递过来的插槽（这个在以渲染函数返回时会有作用，后面会讲到）
      emit：当我们组件内部需要发出事件时会用到emit
    */
  setup(props, { emit,expose }) {

    const state= reactive({
       arr:[
        {name: "zhangsan", age: 26},
        {name: "lisi", age: 25},
      ],
      obj:{
        name: "wangwu",
        age: 28
      }
    })
    console.log("接收到的数据", props.title);
    const handleMsg = () => {
      emit("sendMsg", "未来你好");
    };
    // 监听从props中得到的数据
    watch(()=>props.title,(newValue, oldValue) => {
      console.log("监听得到的新值和旧值", newValue, oldValue);
    })

    // 监听数组或者对象
    watch(()=> state.obj, (newValue, oldValue) => {
      console.log("当前获得的新值", newValue)
    }, {deep: true})



    const store = useStore();
    // 箭头函数这种写法自动携带返回值，加{}需要return
    let device = computed(() => store.state.settings.device);

    const getValue= (getValue: string) =>{
      console.log("getValue", getValue)
    };
    // MapsList定义数组里面的元素
    const getNewValue= (list: Array<MapsList> )=>{
        // interface item {
        //  name?: string,
        //  age?: number
        // }
       
        //  list.filter((item : Object)=> (item as any).age > 25)
        let newList= list.filter((item)=> item.age > 25 )  
        console.log("获得的符合数据", newList)
        
    };

    const addValue=()=>{
       state.obj.age++
    };

    onMounted(()=>{
      getValue("历史给予我们我们唯一的教训就是我们不会吸取任何教训");
      getNewValue(state.arr)
    })

    const getDevice = () => {
      store.dispatch("settings/toggleDevice", "android");
    };

    const getNewInfo=()=>{
      return "梦想需要有实际行动，才能实现"
    }
    // 子组件中的方法通过expose暴露，让父组件使用
    expose({
      getNewInfo
    })

    return {
      device,
      handleMsg,
      getDevice,
      addValue
    };
  },
};
</script>

<style>
.box{
  margin-top: 0.6rem;
}
</style>