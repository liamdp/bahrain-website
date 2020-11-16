<template lang="html">

  <section class="header-navbar">
    <img src="../assets/logo.png" class="logo" />
    <div id="nav">
      <router-link to="/">Events</router-link> |
      <!--<router-link to="/controllers">Controllers</router-link> |-->
      <a href="https://bahrainvacc.com">Main Site</a>
    </div>
    <router-view />
  </section>

</template>

<script lang="ts">
export default {
  name: "Navbar",
  props: [],
  mounted() {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style scoped lang="scss">
#nav {
  padding: 30px;
  color: #f5faff;

  a {
    color: #8d1b3d;
    text-decoration: none;

    &.router-link-exact-active {
      color: #f5faff;
      font-weight: 700;
    }
  }
}
.header-navbar {
  padding: 1rem 0 0 0;
}
.logo {
  height: 75px;
}
</style>
