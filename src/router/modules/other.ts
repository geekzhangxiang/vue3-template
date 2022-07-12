const other=[
    {
        path: '/draggable',
        name: "Draggabe",
        component: () => import(/* webpackChunkName: "dragg" */ '@/views/draggable/Draggable.vue')

        // 按需加载
        // component: ( resolve ) => require( ['@/views/draggable/Draggable'], resolve)
     },
     {
       path: '/todoList',
       name: 'TodoList',
       component: () => import(/* webpackChunkName: "todo" */ '@/views/TodoList.vue')
     },
     {
       path: '/luckdraw',
       name: 'LuckDraw',
       component: () => import(/* webpackChunkName: "luckdraw" */ '@/views/LuckDraw.vue')
     },
     {
       path: '/address/list',
       name: 'Address',
       component: () => import(/* webpackChunkName: "address" */ '@/views/address/AddressList')
     },
     {
       path: '/address/edit',
       name: 'AddressEdit',
       component: () => import(/* webpackChunkName: "address" */ '@/views/address/AddressEdit')
     },
];

export default other