import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { Button } from "vant";

export default defineComponent(()=>{
    const router= useRouter();
    const goto= ()=>{
        router.push({
            path: "/showInfo",
            query: {
                user: "zhangsan"
            }
        })
    };

    const sendParams=()=>{
        router.push({
            name: "showInfo",
            params:{
                age: 26,
                
            }
        })
    }

    return ()=>(
        <Button type="success" onClick={() => goto()}>跳转到新页面</Button>
        // <Button type="success" onClick={() => sendParams()}>跳转到新页面</Button>
    )
})