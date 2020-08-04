<template>
  <div>
    <div class="head">
      <span>
        <van-icon name="arrow-left" style="float:left;margin-top:.5rem" @click="goback" />
        <span class="center">{{name}}</span>
        <span class="goback" @click="goback">切换城市</span>
      </span>

      <van-search v-model="value" clearable placeholder="输入学校、商务楼、地址" />
      <van-button type="info" size="large" @click="asd">提交</van-button>
      <div
        class="shuju"
        v-for="city in xianjian"
        :key="city.id"
        @click="address(city.id,city.name)"
      >
        <a>
          <span class="address">{{city.name}}</span>
          <br />
          <span style="color: #999;">{{city.address}}</span>
        </a>
      </div>
      <div style="font-size:.5rem;margin-left:.8rem">
        搜索历史
        <span style="float:right;color:black;margin-top:.1rem" @click="qing">清空</span>
        <ul>
          <li
            v-for="histroy in addressls"
            :key="histroy.index"
            @click="add(histroy.id,histroy.name,histroy.latitude,histroy.longitude)"
          >{{histroy.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import JsCookie from "js-cookie";
export default {
  name: "",
  data() {
    return {
      name: "",
      id: "",
      xianjian: [],
      value: "",
      city: "",
      clearable: false,
      num: 0,
      addressls: [],
      shuz: 0
    };
  },
  methods: {
    qing() {
      for (var i = 1; i <= this.num; i++) {
        if (JsCookie.get("id" + i) == JsCookie.get("item.id")) {
          JsCookie.remove("id" + i);
          JsCookie.remove("addressls" + i);
        }
      }
      this.addressls = [];
    },
    goback() {
      this.$router.back(-1);
    },
    address(id, name) {
      for (var i = 0; i < this.num; i++) {
        if (JsCookie.get("addressls" + i) == name) {
          return;
        }
      }

      JsCookie.set("city.id", id);
      JsCookie.set("city.name", name);
      this.num++;
      JsCookie.set("num", this.num);
      JsCookie.set("addressls" + this.num, name);
      JsCookie.set("id" + this.num, JsCookie.get("item.id"));

      this.$router.push({ path: "/" });
    },
    add(id, name, latitude, longitude) {
      JsCookie.set("latitude", latitude, {
        expires: 1
      });
      JsCookie.set("longitude", longitude, {
        expires: 1
      });
      JsCookie.set("city.id", id);
      JsCookie.set("city.name", name);
      this.$router.push({ path: "/" });
    },
    asd() {
      axios

        .get("http://cangdu.org:8001/v1/pois", {
          params: {
            city_id: this.id,
            keyword: this.value,
            type: "search"
          }
        })
        .then(response => {
          console.log(response.data);
          this.xianjian = response.data;
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    }
  },
  created() {
    this.num = JsCookie.get("num");
    for (var i = 1; i <= this.num; i++) {
      if (JsCookie.get("id" + i) == JsCookie.get("item.id")) {
        this.addressls.push({
          name: JsCookie.get("addressls" + i),
          id: JsCookie.get("id" + i)
        });
        this.shuz++;
      }
    }
    this.id = JsCookie.get("item.id");
    this.name = JsCookie.get("item.name");
  }
};
</script>
<style lang="stylus" scoped>
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

.address {
  color: black;
  float: left;
  position: relative;
  top: 0.7rem;
}

.shuju {
  border-bottom: 1px solid #e4e4e4;
  width: 100%;
}

ul li {
  text-align: center;
  font-size: 0.36rem;
  border-bottom: 1px solid #e4e4e4;
}
</style>