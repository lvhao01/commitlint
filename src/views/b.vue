<script setup lang="ts">
import HelloWorld from 'comps/HelloWorld.vue'
import testPop from 'comps/testPop.vue'
import { ref, getCurrentInstance } from 'vue'
import {useRouter} from "vue-router"
const router = useRouter()

// 组件弹窗组件
const testPopRef = ref()
const restShow = () => {
  testPopRef.value.changeFlg(true)
}

const { proxy } = getCurrentInstance() as any
// 全局组件弹窗
const 全局组件 = () => {
  proxy.$showPopFn(true)
}


const jump2 = (): void => {
  router.push({ name: 'int'})
}
</script>

<template>
  <h1>b页面</h1>
  <HelloWorld msg="Vite + Vue" test="我是test" />
  <hr />
  <h1 @click="restShow">组件测试</h1>
  <Teleport to="body" :disabled="true">
    <testPop ref="testPopRef" />
  </Teleport>
  <hr />
  <h1 @click="全局组件">全局组件测试</h1>
  <el-button @click="jump2" type="info">去首页</el-button>
  <hr>
</template>

<style lang="less" scoped>

</style>
