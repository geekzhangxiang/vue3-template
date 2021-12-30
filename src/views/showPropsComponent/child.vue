<template>
  <h2>{{ title }}</h2>
  <div>
    <Button type="success" @click="handleMsg">发送信息</Button>
  </div>
  <div>
    <Button type="success" @click="getDevice">发送到数据仓库的信息</Button>
    <div>{{device}}</div>
  </div>
</template>

<script lang="ts">
import { computed } from "vue";
import { useStore } from "vuex";
import { Button } from "vant";
export default {
  name: "message",
  components: {
    Button,
  },
  props: ["title"],
  /**
    * context包含3个属性
    * 
    * attrs：所有的非prop的attribute
      slots：父组件传递过来的插槽（这个在以渲染函数返回时会有作用，后面会讲到）
      emit：当我们组件内部需要发出事件时会用到emit
    */
  setup(props, { emit }) {
    console.log("接收到的数据", props.title);
    const handleMsg = () => {
      emit("sendMsg", "未来你好");
    };
    const store = useStore();
    // 箭头函数这种写法自动携带返回值，加{}需要return
    let device = computed(() => store.state.settings.device);


    const getDevice = () => {
      store.dispatch("settings/toggleDevice", "android");
    };
    return {
      device,
      handleMsg,
      getDevice
    };
  },
};
</script>

<style>
</style>