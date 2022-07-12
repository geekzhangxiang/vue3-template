<template>
  <div>
    <!--使用draggable组件-->
    <div class="itxst">
      <div class="col">
        <div class="title">国内网站</div>
        <draggable
          v-model="arr1"
          group="site"
          animation="300"
          dragClass="dragClass"
          ghostClass="ghostClass"
          chosenClass="chosenClass"
          @start="onStart"
          @end="onEnd"
          item-key="index"
        >
           <template #item="{ element }">
              <div class="item">
                <p>{{ element.name }}</p>
              </div>
            </template>
        </draggable>
      </div>
      <div class="col">
        <div class="title">你可以把左边的元素拖到右边</div>
        <draggable
          v-model="arr2"
          group="site"
          animation="300"
          dragClass="dragClass"
          ghostClass="ghostClass"
          chosenClass="chosenClass"
          @start="onStart"
          @end="onEnd"
          item-key="index"
        >
         
            <template #item="{ element }">
              <div class="item">
                <p>{{ element.name }}</p>
              </div>
            </template>
          
        </draggable>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
// import router from "@/router"
//导入draggable组件
import draggable from "vuedraggable";
import { useRouter } from "vue-router";
let router=useRouter();
console.log(router)
export default defineComponent({
  //注册draggable组件
  components: {
    draggable,
  },
  data() {
    return {
      drag: false,
      //定义要被拖拽对象的数组
      arr1: [
        { id: 1, name: "www.itxst.com" },
        { id: 2, name: "www.jd.com" },
        { id: 3, name: "www.baidu.com" },
        { id: 3, name: "www.taobao.com" },
      ],
      arr2: [
        { id: 1, name: "www.google.com" },
        { id: 2, name: "www.msn.com" },
        { id: 3, name: "www.ebay.com" },
        { id: 4, name: "www.yahoo.com" },
      ],
      
    };
  },
  created(){
    // console.log(this.$route.query)
    console.log(this.$route.params)
    
   
  },
  methods: {
    //开始拖拽事件
    onStart() {
      this.drag = true;
    },
    //拖拽结束事件
    onEnd() {
      this.drag = false;
    },
  },
});
</script>
<style>
/*定义要拖拽元素的样式*/
.ghostClass {
  background-color: blue !important;
}
.chosenClass {
  background-color: red !important;
  opacity: 1 !important;
}
.dragClass {
  background-color: blueviolet !important;
  opacity: 1 !important;
  box-shadow: none !important;
  outline: none !important;
  background-image: none !important;
}
.itxst {
  margin: 10px;
}
.title {
  padding: 6px 12px;
}
.col {
  width: 40%;
  flex: 1;
  padding: 10px;
  border: solid 1px #eee;
  border-radius: 5px;
  float: left;
}
.col + .col {
  margin-left: 10px;
}

.item {
  padding: 6px 12px;
  margin: 0px 10px 0px 10px;
  border: solid 1px #eee;
  background-color: #f1f1f1;
}
.item:hover {
  background-color: #fdfdfd;
  cursor: move;
}
.item + .item {
  border-top: none;
  margin-top: 6px;
}
</style>