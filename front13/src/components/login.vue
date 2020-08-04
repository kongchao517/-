<template>
  <div>
    <div class="backgroun-colors">
      <span class="stysize1" style>
        <img style="width:.65rem" src="../img/img2.png" @click="goBack()" />
      </span>
      <span class="stysize2">密码登录</span>
    </div>
    <div style="height:.4rem;background-color:rgb(245,245,245);padding-top:.4rem"></div>
    <input type="text" class="inputtext" placeholder="账号" v-model="user" />
    <input class="inputtext" :type="toggle" v-model="value" placeholder="密码" />
    <input v-model="value1" placeholder="验证码" class="inputtext1" style />

    <van-image :src="img" style="float:right;margin-right:1rem;margin-top:-1rem">
      <template v-slot:error></template>
    </van-image>
    <div style="width:100%;background-color:rgb(245,245,245);height:19rem">
      <div style="fontSize:.4rem;float:right;margin-right:.8rem;margin-top:.1rem">
        看不清?
        <span @click="imgs" style="color:rgb(85,162,234)">换一张</span>
      </div>
      <div class="what">温馨提示:未注册的账号，登录时将自动注册</div>
      <div class="what1">注册过的账号用户可凭账号密码登录</div>
      <button class="thy" @click="cookis">登录</button>
      <span style="fontSize:.36rem;color:#3b95eb;margin-left:7.5rem;" @click="reset">重置密码？</span>
    </div>
    <van-icon :name="aa?'closed-eye':'eye-o'" @click="bb" class="baicon" />
  </div>
</template>

<script>
import axios from "axios";
import Cookies from "js-cookie";
export default {
  name: "login",
  data() {
    return {
      input: "",
      aa: true,
      value: "",
      toggle: "password",
      value1: "",
      user: "",
      img: ""
    };
  },
  methods: {
    bb() {
      this.aa = !this.aa;
      if (this.toggle == "password") {
        this.toggle = "text";
      } else {
        this.toggle = "password";
      }
    },
    goBack() {
      window.history.back();
    },
    cookis() {
      if (this.user == "" && this.value == "") {
        alert("账号密码不能为空");
      } else {
        Cookies.set("user", this.user, { expires: 1 });
        this.$router.push("/");
      }
    },
    imgs() {
      axios.post("https://elm.cangdu.org/v1/captchas").then(response => {
        this.img = response.data.code;
        console.log("img");
      });
    },
    reset() {
      this.$router.push({ name: "ResetPassword" });
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
  font-size: 0.36rem;
  margin-left: 2%;
  position: relative;
  top: 0.2rem;
}

.stysize2 {
  color: white;
  font-size: 0.4rem;
  font-weight: bold;
  margin-left: 32%;
  position: relative;
  top: 0.1rem;
  font-weight: bold;
}

.inputtext {
  margin-left: 0.5rem;
  width: 95%;
  margin-top: 0.4rem;
  border-radius: 2%;
  border: none;
  border: solid 0.03rem #e4e4e4;
  height: 1.4rem;
  font-size: 0.6rem;
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
  height: 1.4rem;
  font-size: 0.6rem;
  border: none;
}
.what {
  color: rgb(255, 0, 0);
  font-size: 0.36rem;
  margin-left: 0.5rem;
  padding-top: 0.8rem;
}
.what1 {
  color: rgb(255, 0, 0);
  font-size: 0.36rem;
  margin-left: 0.5rem;
  padding-top: 0.3rem;
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
.baicon {
  position: relative;
  bottom: 22rem;
  left: 8.8rem;
}
</style>
