<template>
  <div>
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
  name: "order",
  data() {
    return {
    };
  },
  methods: {
   
  }
};
</script>


<style  scoped>
</style>
