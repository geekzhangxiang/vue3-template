<template>
  <div class="title">{{name}}</div>
</template>

<script>

export default {
   name: "normal",
   data(){
       return { 
           name: "世界那么大，我想去看看"
       }
   }
}
</script>

<style lang="scss">
.title{
  color: $bg;
}
</style>