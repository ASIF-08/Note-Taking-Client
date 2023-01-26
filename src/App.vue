<template>
  <div id="app">
    <NavBar />
    <router-view></router-view>
  </div>
</template>
<script>
// import HelloWorld from './components/HelloWorld.vue'
import NavBar from "@/components/NavBar.vue";

export default {
  name: "App",
  components: {
    // HelloWorld
    NavBar,
  },
};
</script>

<style>
.decoration-none {
  text-decoration: none;
}
</style>
