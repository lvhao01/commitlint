<template>
  <div className="testPop" v-if="flg" @click="changeFlg(false)">
    <p>弹窗组件</p>
    <p v-for="item in 8" :key="item">内容{{ +item + 20 }}</p>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue"
const flg = ref<boolean>(false)

const changeFlg = (args:boolean) => {
  flg.value = args
}
defineExpose({changeFlg})
</script>


<style scoped>
.testPop{
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  margin: auto;
  width: 400px;
  height: 400px;
  background-color: #eee;
  border-radius: 20px;
  border: 2px solid #42b883aa;
  text-align: center;
}
</style>