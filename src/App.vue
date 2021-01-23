<template>
  <div id="app">
    <div id="nav">
      <Navbar />
    </div>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");
#app {
  font-family: Avenir, Poppins, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100vh;
  background-color: #181818 !important;
}
body,
html {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 100vh;
}
</style>

<script lang="ts">
import Vue from "vue";
import Navbar from "./components/navigation";
export default Vue.extend({
  components: { Navbar },
});
</script>
