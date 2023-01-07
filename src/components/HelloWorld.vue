<script setup lang="ts">
// const aa = defineProps<{ msg: string }>()
interface prop {
  msg:string
  test?:string
}
defineProps<prop>()
// {
//   msg:{type:String,require:true,default:""},
//   test:{type:String,require:true,default:""},
// }

</script>

<template>
  <div class="hellow">
    <h1>msg:{{ msg }}</h1>
    <h1>test:{{ test }}</h1>
  </div>
</template>

<style scoped>
.hellow{
  background-color:'antiquewhite';
}
</style>
