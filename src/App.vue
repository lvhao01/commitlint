<script setup lang="ts">

</script>

<template>
  <div>
    <router-view #default="{ route, Component }">
      <transition :enter-active-class="`animate__animated ${route.meta.transition}`">
        <div>
          <component :is="Component"></component>
        </div>
      </transition>
    </router-view>
  </div>

</template>

<style>

</style>
