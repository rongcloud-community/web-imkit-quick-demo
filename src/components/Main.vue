<script setup lang="ts">
import Navbar from './Navbar.vue';

</script>

<template>
  <div class="app-layout">
    <Navbar></Navbar>
    <div class="app-layout-conten">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped lang="scss">
.app-layout {
  display: flex;
  flex: 1;
  overflow: hidden;
  
  .app-layout-conten {
    flex: 1;
    display: flex;
  }
}
</style>
