<template>
  <h1>我是aa页面</h1>
  <button @click="jump2">跳转b页面</button>
  <el-button @click="back" type="warning">返回</el-button>
</template>

<script setup lang="ts">
import {useRouter} from "vue-router"
const router = useRouter()
// 假装修复
const jump2 = (): void => {
  router.push({ 
    path:"/b",
    query:{
      id:13213
    }
  })
  // router.push({ name: 'user', params: { username } })
}
const back = (): void => {
  // router.go(-1)
  router.back()
}
</script>

<style scoped lang="less">

</style>