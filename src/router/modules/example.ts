const examples=[
      {
        path: '/gotoPage',
        name: 'GotoPage',
        component: () => import(/* webpackChunkName: "todo" */ '@/views/gotoPage/index')
      },
      {
        path: '/showInfo',
        name: 'showInfo',
        component: () => import(/* webpackChunkName: "todo" */ '@/views/showInfo/index')
      },
      {
        path: '/showLocalComponent',
        name: 'showLocalComponent',
        component: () => import(/* webpackChunkName: "todo" */ '@/views/showLocalComponent/index.vue')
      },
      {
        path: '/showPropsComponent',
        name: 'showPropsComponent',
        component: () => import(/* webpackChunkName: "todo" */ '@/views/showPropsComponent/parents.vue')
      },
      {
        path: '/normal',
        name: 'normal',
        component: () => import(/* webpackChunkName: "todo" */ '@/views/normal/index.vue')
      }
];

export default examples