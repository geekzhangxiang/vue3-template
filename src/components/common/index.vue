<template>
  <div class="box">
   <Button type="success">{{val}}</Button>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, ref, reactive, nextTick, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { Button } from "vant";

let val=ref();
const router = useRouter();
const getRouterParams=()=>{
  console.log("11111", router.currentRoute.value.query.msg)
  val.value=router.currentRoute.value.query.msg
}
onMounted(()=>{
    getRouterParams()
});
</script>

<style>

</style>