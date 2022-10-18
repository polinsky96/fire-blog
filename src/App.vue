<template>
  <div class="app">
    <HeaderItem/>
    <!-- <NavigationTop/> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import NavigationTop from './components/NavigationTop.vue'
import HeaderItem from './components/HeaderItem.vue';

export default {
  components: {
    HeaderItem,
    // NavigationTop
  }
}
</script>

<style lang="scss">
</style>