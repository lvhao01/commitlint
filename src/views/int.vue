<template>
  <h1>初始化页面</h1>
  <el-button type="primary" @click="jump1">跳转a路由</el-button>
  <el-button type="primary" @click="jump2">跳转b路由</el-button>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const jump1 = (): void => {
  router.push({ 
    path:"/a",
    query:{
      id:13213
    }
  })
  // router.push({ name: 'user', params: { username } })
}
const jump2 = (): void => {
  router.push({ 
    path:"/b",
    query:{
      id:13213
    }
  })
  // router.push({ name: 'user', params: { username } })
}
</script>

<style scoped lang="less">

</style>