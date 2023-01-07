import { createApp, createVNode, render } from "vue";
import App from "@/App.vue";

// 动画库
import 'animate.css/animate.min.css';

// 组件
import ElementPlus from "element-plus";
// @ts-ignore
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import "element-plus/dist/index.css";

// 虚拟dom自定义组件
import testPop from "comps/testPop.vue";
const testPopVnode = createVNode(testPop);
render(testPopVnode, document.body);
const showPopFn= testPopVnode.component?.exposed?.changeFlg;

//路由
// @ts-ignore
import router from './routes'

const app = createApp(App);
app.config.globalProperties.$showPopFn = showPopFn
app.use(ElementPlus, {
  locale: zhCn,
});
app.use(router);
app.mount("#app");
