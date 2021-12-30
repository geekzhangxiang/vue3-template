import { createRouter, createWebHashHistory,createWebHistory, RouteRecordRaw } from 'vue-router'
    //vue3中使用webpack自动化导入路由模块 
    const manageFiles = require.context('./modules', true, /\.ts$/);
    console.log(manageFiles.keys()) // ['./a.js'] 返回一个数组，包含全部文件名
    
    let configRouters: any= [];
    manageFiles.keys().forEach(key => {
        if (key === './index.js') return //    如果是当前文件，则跳过
        configRouters = configRouters.concat(manageFiles(key).default) // 读取出文件中的default模块
    })
    




const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  ...configRouters,
  {
    path: '/chat/list',
    name: 'Chat',
    component: () => import( '@/views/chat')
    // 按需加载
    // component: (resolve)=> require(["@/views/chat"], resolve) ,
  }
]

const router = createRouter({
  // history: createWebHashHistory(),
  history: createWebHistory(),
  routes
})
export default router
