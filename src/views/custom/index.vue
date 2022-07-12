<template>
  <div>
    <p>我是父级组件</p>
    <p>父级组件内容：{{ text }}</p>
    <p><button @click="onChange">改变内容</button></p>
    <hr>
    <child v-model="text"></child>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import child from './child'
export default defineComponent({
  components: {
    child
  },
  data() {
    return {
      text: '我是父级组件的内容'
    }
  },
  methods: {
    onChange() {
      this.text = '我是由父级组件触发改变了内容'
    },
    getVal(value){
      this.text=value
    }
  }
})
</script>
<style scoped>
</style>
