<template>
  <div>
    <div class="backgroun-colors">
      <span class="stysize1" style>
        <img style="width:.65rem" src="../img/img2.png" @click="goBack()" />
      </span>
      <span class="stysize2">重置密码</span>
    </div>
    <div style="height:.4rem;background-color:rgb(245,245,245);padding-top:.4rem"></div>
    <input type="text" class="inputtext" placeholder="账号" />

    <input type="text" class="inputtext" placeholder="旧密码" />

    <input type="text" class="inputtext" placeholder="请输入新密码" />

    <input type="text" class="inputtext" placeholder="请确认密码" />
    <input v-model="value1" placeholder="验证码" class="inputtext1" style />
    <van-image :src="img" style="float:right;margin-right:1rem;margin-top:-1rem">
      <template v-slot:error></template>
    </van-image>
    <div style="fontSize:.4rem;float:right;margin-right:.8rem;margin-top:.1rem">
      看不清?
      <span @click="imgs" style="color:rgb(85,162,234)">换一张</span>
    </div>
    <button class="thy">确认修改</button>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "ResetPassword",
  data() {
    return {
      img: "",
      user: "",
      value1: ""
    };
  },
  methods: {
    goBack() {
      window.history.back();
    },
    imgs() {
      axios.post("http://cangdu.org:8001/v1/captchas").then(response => {
        this.img = response.data.code;
      });
    }
  },
  created() {
    axios.post("http://cangdu.org:8001/v1/captchas").then(response => {
      this.img = response.data.code;
    });
  }
};
</script>
<style scoped>
.backgroun-colors {
  background-color: rgb(49, 144, 232);
  width: 100%;
  height: 1.8rem;
}
.stysize1 {
  color: white;
  font-size: 0.6rem;
  margin-left: 2%;
  position: relative;
  top: 0.2rem;
}

.stysize2 {
  color: white;
  font-size: 0.5rem;
  font-weight: bold;
  margin-right: 4rem;
  position: relative;
  top: 0.5rem;
  float: right;
}
.inputtext {
  margin-left: 0.5rem;
  width: 95%;
  margin-top: 0.4rem;
  border-radius: 2%;
  border: none;
  border: solid 0.03rem #e4e4e4;
  height: 1rem;
  font-size: 0.36rem;
  border-right: none;
  border-left: none;
  border-top: none;
}
.inputtext1 {
  margin-left: 0.5rem;
  width: 95%;
  margin-top: 0.4rem;
  border-radius: 2%;
  border: none;
  border: solid 0.03rem #e4e4e4;
  height: 1rem;
  font-size: 0.36rem;
  border-right: none;
  border-left: none;
  border-top: none;
  border-bottom: none;
}
.thy {
  width: 90%;
  margin-left: 0.4rem;
  margin-top: 0.5rem;
  border: none;
  background-color: rgb(76, 217, 100);
  color: white;
  font-size: 0.6rem;
  height: 1.5rem;
}
</style>