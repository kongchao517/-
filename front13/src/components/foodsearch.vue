<template>
  <div @click="all">
    <div class="backgroun-colors" style="text-align: center;">
      <span class="stysize1" style="float:left">
        <img style="width:.65rem" src="../img/img2.png" @click="goBack()" />
      </span>
      <span style="color:white;position: relative;top: .2rem;fontSize:.5rem;margin-left:-2rem">搜索</span>
    </div>
    <div style="height:.4rem;background-color:rgb(245,245,245);padding-top:1.8rem"></div>
    <div class="Border">
      <input
        type="text"
        @click="allno1"
        @keyup="submit"
        class="inputtext"
        :right-icon="inputtrue?'cross':' '"
        @click-right-icon="bb"
        v-model="value"
        placeholder="输入学校、商务楼、地址"
        style="width:5.5rem;font-size:.36rem"
      />

      <button class="buttoncss" @click="searchall">提交</button>
    </div>
    <div
      style="background-color:rgb(239,239,239);fontSize:.5rem;padding-top:.2rem;padding-bottom:.2rem;margin-top:.4rem"
    >
      <div
        v-for="seek in seekfont"
        :key="seek.index"
        @click="url()"
        class="main-business"
        style="border-bottom: 1px solid #f5f5f5; background-color: white; margin-top: .25rem ;"
      >
        <div style="float: left;">
          <van-image class="img1" :src="'http://cangdu.org:8001/img/'+seek.image_path" />
          <p class="main-business-text">
            <span class="main-business-text-tit1">{{seek.category}}</span>
          </p>
          <p class="main-business-text">
            <span class="Monthlysale">月售{{seek.rating_count}}单</span>
          </p>
          <p class="main-business-text">
            <span
              class="main-business-text-left"
            >{{seek.float_delivery_fee}}元起送 / 距离{{seek.recent_order_num}}</span>
          </p>
        </div>

        <div class="full">
          <span style="background-color:rgb(212,142,142);color:white">减</span>满减优惠
          <span style="color: #f7c00c;">(手机客户端专享)</span>
        </div>
        <div class="full1">
          <span style="background-color:rgb(212,142,142);color:white">首</span>用户立减(不与其他活动共享)
          <span style="color: #f7c00c;">(手机客户端专享)</span>
        </div>
      </div>
    </div>
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
import Cookies from "js-cookie";
import axios from "axios";
export default {
  name: "foodsearch",
  data() {
    return {
      what1: "",
      what2: "",
      what3: "",
      is: true,
      value: "",
      inputtrue: false,
      seekfont: [],
      num: 0,
      seetfont: []
    };
  },
  methods: {
    url() {
      this.$router.push("details");
    },
    submit() {
      if (this.value == "") {
        this.is = true;
      } else {
        this.is = false;
      }
    },

    all() {
      this.is = true;
    },
    allno1() {
      this.is = false;
    },

    bb() {
      this.value = "";
    },
    goBack() {
      this.$router.push("/");
    },
    searchall() {
      this.num++;
      Cookies.set("seek1", this.num);
      Cookies.set("seekn" + this.num, this.value);
      axios
        .get(
          "http://cangdu.org:8001/v4/restaurants?geohash=" +
            this.what1 +
            "&keyword=" +
            this.value
        )
        .then(response => {
          console.log(response.data);
          this.seekfont = response.data;
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    },
    searchall1(xhb) {
      axios
        .get(
          "http://cangdu.org:8001/v4/restaurants?geohash=" +
            this.what1 +
            "&keyword=" +
            xhb
        )
        .then(response => {
          console.log(response.data);
          this.seekfont = response.data;
        })
        .catch(function(error) {
          // handle error
        });
    }
  },
  created() {
    this.what1 = Cookies.get("user123");
    this.what2 = Cookies.get("stockpilehistoryname");
    this.what3 = Cookies.get("stockpilehistoryaddress");
    this.num = Cookies.get("seek1");
    for (let i = 1; i <= this.num; i++) {
      this.seetfont.push(Cookies.get("seekn" + i));
      console.log(i);
    }
  },
  watch: {
    value() {
      if (this.value != "") {
        this.inputtrue = true;
      } else {
        this.inputtrue = false;
      }
    }
  }
};
</script>

<style scoped>
.backgroun-colors {
  background-color: rgb(49, 144, 232);
  width: 100%;
  height: 1.8rem;
  z-index: 1;
  position: fixed;
}

.stysize1 {
  color: white;
  font-size: 0.6rem;
  margin-left: 2%;
  position: relative;
  top: 0.4rem;
}

.stysize2 {
  color: white;
  font-size: 0.6rem;
  margin-right: 0.5rem;
  position: relative;
  top: 0.5rem;
  float: right;
}

.stysize3 {
  color: white;
  font-size: 0.6rem;
  position: relative;
  top: 0.12rem;
}

.inputtext {
  margin-left: 0.5rem;
  width: 10.7rem;
  margin-top: 0.4rem;
  border-radius: 2%;
  border: none;
  border: solid 0.03rem #e4e4e4;
  height: 1.1rem;
  font-size: 0.6rem;
}

.buttoncss {
  margin-left: 0.5rem;
  width: 2.75rem;
  height: 1.1rem;
  font-size: 0.6rem;
  border: none;
  background-color: rgb(49, 144, 232);
  border-radius: 2%;
  color: white;
  margin-top: 0.5rem;
  float: right;
  margin-right: 0.3rem;
}

.Border {
  width: 100%;
  border-top: solid rgb(228, 228, 228) 0.015rem;
}

.el-autocomplete >>> .el-input__inner {
  height: 1.1rem;
  width: 13.7rem;
  font-size: 0.6rem;
  border: solid 0.03rem #e4e4e4;
  margin-left: 0.5rem;
  margin-top: 0.4rem;
  border-radius: 2%;
}

.my-autocomplete li {
  padding: 7px;
  width: 19rem;
}

.name {
  text-overflow: ellipsis;
  overflow: hidden;
  padding-bottom: 1rem;
  font-size: 12px;
  color: #b4b4b4;
  font-size: 1rem;
}

.highlighted .addr {
  height: 3rem;
}

slot-scope {
  background-color: black;
}

.okis1 {
  display: none;
}

.main-business {
  height: 4rem;
}

.main-business-text {
  float: left;
  margin-left: 0.1rem;
  /* border: 1px solid red; */
  width: 76%;
  margin-bottom: 0;
  margin-top: 0.08rem;
  color: #646464;
}

.main-business-text-tit1 {
  margin-top: 0.15rem;
  float: left;
  margin-left: 0.1rem;
  font-weight: bold;
  /* border: 1px solid black; */
  width: 4.5rem;
  font-size: 0.5rem;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.main-business-text-left {
  float: left;
  font-weight: bold;
  font-size: 0.4rem;
  margin-left: 0.1rem;
}

.Monthlysale {
  float: left;
  margin-left: 0.1rem;
  margin-top: -0.05rem;
  font-size: 0.5rem;
}

.img1 {
  float: left;
  width: 2rem;
  height: 2rem;
  margin-top: 0.2rem;
  margin-left: 0.2rem;
  /* border: 1px solid red; */
}

.full {
  margin-top: 0.2rem;
  border-top: 2px solid rgb(179, 177, 177);
  float: left;
  margin-left: 2.4rem;
  width: 9.5rem;
  text-align: left;
  padding-top: 0.2rem;
  font-size: 0.3rem;
  color: #615050;
}

.full1 {
  float: left;

  margin-left: 2.4rem;
  width: 9.5rem;
  text-align: left;
  padding-top: 0.2rem;
  font-size: 0.3rem;
  color: #615050;
}

.okis1 {
  display: none;
}
</style>
