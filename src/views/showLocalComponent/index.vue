<template>
  <div>
      <ShowInfo/>
      <CommonInfo/>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent} from "vue"
export default defineComponent({
    name: "showLocalComponent",
    components:{
        ShowInfo: defineAsyncComponent(()=> import("@/components/HelloWorld.vue")),
        CommonInfo: defineAsyncComponent(()=> import("@/components/common/index.vue"))
    },
    setup(){
        
    
        return{}
    }       
})
</script>

<style>

</style>