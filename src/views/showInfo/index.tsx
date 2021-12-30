import { defineComponent, ref, reactive, nextTick, onMounted, onUnmounted } from "vue";
import { useRouter } from "vue-router";
import { Button } from "vant";

export default defineComponent(()=>{
    const router=useRouter();
    const getRouter=()=>{
        console.log(router.currentRoute.value)
    }
    // 使用params进行传参，在接收页面刷新后参数会丢失
    // 解决办法， 1.使用localStorage, sessionStorage存入缓存    2. 存入vuex,在刷新后没有数据的时候从vuex中进行读取
    return ()=>(
        <div>
        {/* {getRouter()} */}
        <Button type="success">{router.currentRoute.value.query.user}</Button>   
        {/* <Button type="success">{router.currentRoute.value.params.age}</Button> */}
        </div>
       
    )
})