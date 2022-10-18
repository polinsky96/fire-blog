<template>
  <div class="app__wrapper">
    <div class="app">
      <HeaderItem/>
      <router-view></router-view>
      <FooterItem/>
    </div>
  </div>
</template>

<script setup>
import HeaderItem from './components/HeaderItem.vue';
import FooterItem from './components/FooterItem.vue';
</script>

<style lang="scss" scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>