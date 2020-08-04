<template>
  <router-view />
</template>

<script>
import JsCookie from "js-cookie";
export default {
  data() {
    return {};
  },
  created() {
    if (JsCookie.get("num") == null) {
      JsCookie.set("num", 0);
      JsCookie.set("addressls0", "");
      JsCookie.set("id0", "");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
