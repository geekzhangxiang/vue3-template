import { computed, onMounted, watch, reactive, inject, defineComponent } from "vue";
import { useStore } from "vuex";
import { MapsList } from "./type";
import grandson from "./grandson.vue"
// import { Button } from "vant";
export default defineComponent({
    name: "message",
    // components: {
    //   Button,
    // },
    props: {
        title: {
            type: String,
            default: "",
            required: true,
        },
    },
    components: {
        grandson
    },

    /**
      * context包含3个属性
      * 
      * attrs：所有的非prop的attribute
        slots：父组件传递过来的插槽（这个在以渲染函数返回时会有作用，后面会讲到）
        emit：当我们组件内部需要发出事件时会用到emit
      */
    setup(props, { emit, expose, slots }) {
        const state = reactive({
            arr: [
                { name: "zhangsan", age: 26 },
                { name: "lisi", age: 25 },
            ],
            obj: {
                name: "wangwu",
                age: 28,
            },
        });
        console.log("接收到的数据", props.title);
        const handleMsg = () => {
            emit("sendMsg", "未来你好");
        };
        // 监听从props中得到的数据
        watch(
            () => props.title,
            (newValue, oldValue) => {
                console.log("监听得到的新值和旧值", newValue, oldValue);
            }
        );

        // 监听数组或者对象
        watch(
            () => state.obj,
            (newValue) => {
                console.log("当前获得的新值", newValue);
            },
            { deep: true }
        );

        const store = useStore();
        // 箭头函数这种写法自动携带返回值，加{}需要return
        const device = computed(() => store.state.settings.device);

        const getValue = (getValue: string) => {
            console.log("getValue", getValue);
        };
        // MapsList定义数组里面的元素
        const getNewValue = (list: Array<MapsList>) => {
            // interface item {
            //  name?: string,
            //  age?: number
            // }

            //  list.filter((item : Object)=> (item as any).age > 25)
            const newList = list.filter((item) => item.age > 25);
            console.log("获得的符合数据", newList);
        };

        const addValue = () => {
            state.obj.age++;
        };
        const userLocation: unknown = inject("location");
        const userGeolocation = inject("geolocation");
        const updateUserLocation = inject("updateLocation");

        console.log("获得的userLocation", userLocation.value);
        console.log("获得的userGeolocation", userGeolocation);
        console.log("获得的userGeolocation", updateUserLocation());

        onMounted(() => {
            getValue("历史给予我们我们唯一的教训就是我们不会吸取任何教训");
            getNewValue(state.arr);
        });

        const getDevice = () => {
            store.dispatch("settings/toggleDevice", "android");
        };

        const getNewInfo = () => {
            return "梦想需要有实际行动，才能实现";
        };

        // 子组件中的方法通过expose暴露，让父组件使用
        expose({
            getNewInfo,
        });

        // return {
        //   device,
        //   handleMsg,
        //   getDevice,
        //   addValue,
        //   userLocation,
        //   userGeolocation,
        //   updateUserLocation
        // };
        return () => {

            return (<div>
                <h2>{props.title}</h2>
                <div class="box">
                    <van-button type="success" onClick={() => handleMsg()}>发送信息</van-button>
                    <van-button type="success" onClick={() => addValue()}>调用事件</van-button>
                </div>
                <div class="box">
                    <van-button type="success" onClick={() => getDevice()}>
                        发送到数据仓库的信息
                    </van-button>
                    <div>{device}</div>
                    {slots.default && slots.default()}
                    <grandson />
                </div>
            </div>)
        }

    },
});