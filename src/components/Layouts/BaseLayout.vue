<template>
  <div class="h-screen flex flex-wrap">
    <HeaderComp />
    <RouterView />
  </div>
</template>
<script setup>
import HeaderComp from "../HeaderComp.vue";
</script>
