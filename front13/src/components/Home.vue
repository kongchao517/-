<template>
  <div>
    <div class="head">
      <span>
        <van-icon name="search" style="float:left;margin-top:.5rem" @click="goback" />

        <span class="center">{{name}}</span>
        <span class="goback" @click="login">登录|注册</span>
      </span>
    </div>
    <div>
      <van-swipe indicator-color="blue">
        <van-swipe-item>
          <van-row>
            <van-col
              v-for="titles in title"
              :key="titles.index"
              span="6"
              style="text-align: center;font-size:.12rem"
            >
              <van-image
                @click="foodfen(titles.title)"
                style="width:1.5rem"
                :src="'http://fuss10.elemecdn.com'+titles.image_url"
              />
              <br />
              <span style="fontSize:.5rem;color:black;">{{titles.title}}</span>
            </van-col>
          </van-row>
        </van-swipe-item>
        <van-swipe-item>
          <van-row>
            <van-col
              v-for="titles in title1"
              :key="titles.index"
              span="6"
              style="text-align: center;font-size:.12rem"
            >
              <van-image
                @click="foodfen(titles.title)"
                style="width:1.5rem"
                :src="'http://fuss10.elemecdn.com'+titles.image_url"
              />
              <br />
              <span style="fontSize:.5rem;color:black;">{{titles.title}}</span>
            </van-col>
          </van-row>
        </van-swipe-item>
      </van-swipe>
    </div>
    <div style="height:.3rem;background-color:rgb(245,245,245);"></div>
    <div style="margin-left:.2rem;margin-top:.3rem">
      <img style="width:.6rem;float:left;" src="../img/near.gif" />
      <div style="float:left;color:#868787; fontSize:.5rem">附近商家</div>
    </div>
    <div>
      <div
        @click="url(forcang.image_path,forcang.piecewise_agent_fee.tips,forcang.float_delivery_fee,forcang.name,forcang.activities,forcang.id)"
        v-for="forcang in cangdu2"
        :key="forcang.index"
        style="padding-left:.3rem;width:100%;float:left;margin-top:.7rem;height:2rem"
      >
        <van-image
          style="width:2.5rem;float:left;"
          :src="'http://cangdu.org:8001/img/'+forcang.image_path"
        />
        <br />
        <div style="margin-top:-1.25rem">
          <div style="fontSize:.4rem;float:left;font-weight: bold;background-color:#ffdc00">品牌</div>
          <div
            style="width:60%;position: relative; bottom: .1rem;fontSize:.55rem;font-weight: bold;  overflow: hidden;white-space: nowrap;text-overflow: ellipsis;"
          >{{forcang.name}}</div>
        </div>
        <div style="margin-top:.3rem">
          <van-rate v-model="value" style="float:left" />
          <span style="fontSize:.4rem;color:#fb7f1e;float:left;margin-top:-.1rem">4.5</span>
          <span
            style="float:left;color:#6a6a6a;fontSize:.4rem;margin-top:-.1rem"
          >月售{{forcang.recent_order_num}}单</span>
        </div>
        <div style="width:70%;">
          <span
            style="color:#333333;fontSize:.4rem;margin-top:.3rem;position: relative;top:-.35rem;"
          >￥{{forcang.float_minimum_order_amount}}起送/{{forcang.piecewise_agent_fee.tips}}</span>
        </div>
        <span
          style="color:#868787;fontSize:.4rem;position: relative;top:-1.7rem;left:6.6rem"
        >{{forcang.distance}}</span>
        <span
          style="color:#298eeb;fontSize:.4rem;position: relative;top:-1.7rem;left:6.4rem"
        >/{{forcang.order_lead_time}}</span>
      </div>

      <div
        style="background-color: #fff;position: fixed;z-index: 100;left: 0;right: 0;bottom: 0;width: 100%;height: 1.3rem;"
      >
        <router-view />
        <van-tabbar route style="position: fixed;bottom:.8rem;">
          <van-tabbar-item replace to="/" icon="home-o">外卖</van-tabbar-item>
          <van-tabbar-item replace to="/foodsearch" icon="search">搜索</van-tabbar-item>
          <van-tabbar-item replace to="/order" icon="search">订单</van-tabbar-item>
          <van-tabbar-item replace to="/mine" icon="search">我的</van-tabbar-item>
        </van-tabbar>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import JsCookie from "js-cookie";
export default {
  name: "Home",
  data() {
    return {
      active: 1,
      address: "",
      title: "",
      name: "",
      id: "",
      title: [],
      title1: [],
      titles: "",
      cangdu2: [],
      searchis: [],
      value: 3.5
    };
  },
  methods: {
    url(image, tip, float, name, activities, id) {
       JsCookie.set("id", id);
      JsCookie.set("activities", activities);
      JsCookie.set("name", name);
      JsCookie.set("img", image);
      JsCookie.set("tips", tip);
      JsCookie.set("float", float);
      this.$router.push("details");
    },
    foodfen(value) {
      this.$router.push("foodfen");
      JsCookie.set("titles.title", value);
    },
    goback() {
      this.$router.push("foodsearch");
    },
    login() {
      this.$router.push("login");
    }
  },
  created() {
    this.id = JsCookie.get("city.id");
    this.name = JsCookie.get("city.name");
    axios
      .get("http://cangdu.org:8001/v2/index_entry")
      .then(response => {
        for (var i = 0; i < response.data.length; i++) {
          if (i < 8) {
            this.title.push(response.data[i]);
          } else {
            this.title1.push(response.data[i]);
          }
        }
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
    this.latitude = JsCookie.get("latitude");
    this.longitude = JsCookie.get("longitude");
    axios
      .get(
        "http://cangdu.org:8001/shopping/restaurants?latitude=" +
          this.latitude +
          "&longitude=" +
          this.longitude,
        {
          params: {
            type: "query"
          }
        }
      )
      .then(response => {
        this.cangdu2 = response.data;
      });
  }
};
</script>

<style scoped>
.head {
  width: 100%;
  height: 1.2rem;
  background-color: #3190e8;
}
span {
  font-size: 0.36rem;
  color: white;
  margin-top: 0.4rem;
}

.goback {
  float: right;
  font-size: 0.36rem;
}

.center {
  margin-left: 4rem;
  position: relative;
  top: -0.3rem;
}
</style>
