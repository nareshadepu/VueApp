<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "app",
  data() {
    return {};
  },
  components: {
    Header
  }
};
</script>

<style>
</style>
