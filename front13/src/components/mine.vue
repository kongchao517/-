<template>
  <div>
    <div class="head">
      <span>
        <van-icon name="arrow-left" style="float:left;margin-top:.5rem" @click="goback" />
        <span class="center">我的</span>
      </span>
    </div>
    <div class="header">
    </div>
    <div class="balance"></div>
    <div class="dd"></div>
    <div class="ee"></div>
    <div
      style="background-color: #fff;
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 1.3rem;"
    >
      <router-view />

      <van-tabbar route style="position: fixed;bottom:.4rem;">
        <van-tabbar-item replace to="/" icon="home-o">外卖</van-tabbar-item>
        <van-tabbar-item replace to="/foodsearch" icon="search">搜索</van-tabbar-item>
        <van-tabbar-item replace to="/order" icon="search">订单</van-tabbar-item>
        <van-tabbar-item replace to="/mine" icon="search">我的</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "site",
  data() {
    return {};
  },
  methods: {
    goback() {
      this.$router.back(-1);
    }
  }
};
</script>

<style  scoped>
div {
  background-color: #f5f5f5;
}
.head {
  width: 100%;
  height: 1.2rem;
  background-color: #3190e8;
}

.center {
  margin-left: 4rem;
  position: relative;
  top: -0.3rem;
}
span {
  font-size: 0.5rem;
  color: white;
  margin-top: 0.4rem;
}
.header {
  width: 100%;
  height: 2.1rem;
  background-color: #3190e8;
}
.balance {
  width: 100%;
  height: 2.1rem;
  border: 1px solid black;
  margin-top: 0.1rem;
}
.dd {
  width: 100%;
  height: 2.5rem;
  border: 1px solid black;
  margin-top: 0.1rem;
}
.ee {
  width: 100%;
  height: 2.1rem;
  border: 1px solid black;
  margin-top: 0.1rem;
}
</style>
