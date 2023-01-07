//引入路由对象
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
  createMemoryHistory,
  RouteRecordRaw,
} from "vue-router";


declare module 'vue-router'{
  interface RouteMeta {
     title?:string,
     transition:string,
  }
}


//路由数组的类型 RouteRecordRaw
// 定义一些路由
// 每个路由都需要映射到一个组件。
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "int",
    meta:{
      transition:'animate__fadeInUp'
    },
    component: () => import("views/int.vue"),
  },
  {
    path: "/a",
    name: "a",
    component: () => import("views/a.vue"),
    redirect: "a/aa",
    children: [
      {
        path: "aa",
        name: "aa",
        meta:{
          transition:'animate__zoomInDown'
        },
        component: () => import("views/aa.vue"),
      },
    ],
  },
  {
    path: "/b",
    name: "b",
    component: () => import("views/b.vue"),
    meta:{
      transition:'animate__bounceIn'
    },
    children: [
      {
        path: "bb",
        name: "bb",
        component: () => import("views/aa.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

//导出router
export default router;
