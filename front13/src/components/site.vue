<template>
  <div>
    <div class="head">
      ele.me
      <span @click="mine">登录|注册</span>
    </div>
    <div style="padding-top:2rem">
      <div style="padding-top:.3rem;">
        <span class="headtwo1">当前定位城市:</span>
        <span class="headtwo2">定位不准时,请在城市列表中选择</span>
      </div>
    </div>

    <div>
      <span style="fontSize:.5rem;margin-left:.35rem;color:rgb(102,102,102);float:left">热门城市：</span>
      <div style="margin-top: .3rem;float:right">
        <div
          @click="city1(city.id)"
          :data="hotcity"
          v-for="city in hotcity"
          :key="city.values"
          class="size"
        >{{city.name}}</div>
      </div>
    </div>

    <div></div>
    <div>
      <div v-for="(value, key, index) in sortgroupcity" :key="key">
        <div style="width:100%; border-bottom: solid .5rem  rgb(245,245,245);overflow: hidden;"></div>

        <div class="nav-city">
          <span
            class="nav-table"
            style="fontSize:.5rem;margin-left:.35rem;color:rgb(102,102,102)"
          >{{key}}</span>
          <span
            v-if="index == 0"
            style="fontSize:.5rem;margin-left:.2rem;color:rgb(102,102,102);float:left"
          >（按字母排序）</span>
        </div>
        <div class="group" style="margin-top: 1rem;">
          <div
            tag="li"
            v-for="item in value"
            :key="item.id"
            class="size1"
            @click="city1(item.id,item.name)"
          >{{item.name}}</div>
        </div>
        <div class="interval"></div>
      </div>
    </div>
  </div>
</template>
<script>
import JsCookie from "js-cookie";
import axios from "axios";
export default {
  name: "site",
  data() {
    return {
      hotcity: [],
      groupcity: []
    };
  },
  methods: {
    mine() {
      this.$router.push({ path: "login" });
    },
    city1(id, name) {
      JsCookie.set("item.id", id);
      JsCookie.set("item.name", name);
      this.$router.push({ path: "searchAddress" });
    }
  },
  created() {
    axios
      .get("http://cangdu.org:8001/v1/cities", {
        params: {
          type: "hot"
        }
      })
      .then(response => {
        this.hotcity = response.data;
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });

    axios
      .get("http://cangdu.org:8001/v1/cities", {
        params: {
          type: "group"
        }
      })
      .then(response => {
        console.log(response.data);
        this.groupcity = response.data;
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  },
  computed: {
    //将获取的数据按照A-Z字母开头排序
    sortgroupcity() {
      let sortobj = {};
      for (let i = 65; i <= 90; i++) {
        if (this.groupcity[String.fromCharCode(i)]) {
          sortobj[String.fromCharCode(i)] = this.groupcity[
            String.fromCharCode(i)
          ];
        }
      }
      console.log(sortobj);
      return sortobj;
    }
  }
};
</script>
<style  scoped>
.head {
  width: 100%;
  height: 1.5rem;
  background-color: #3190e8;
  color: aliceblue;
}
span {
  font-size: 0.6rem;
  float: right;
  margin-top: 0.3rem;
}
.headtwo1 {
  font-size: 0.5rem;
  margin-top: -18%;
  float: left;
  color: rgb(102, 102, 102);
}

.headtwo2 {
  font-size: 0.43rem;
  margin-left: 30%;
  color: rgb(159, 159, 159);
  font-weight: bold;
  margin-top: -17%;
}
.backgroun-colors {
  background-color: rgb(49, 144, 232);
  width: 100%;
  height: 1.8rem;

  position: fixed;
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
  font-size: 0.6rem;
  margin-left: 62%;
  position: relative;
  top: 0.1rem;
}

.size {
  font-size: 0.61rem;
  float: left;
  border: solid 1px rgb(228, 228, 228);
  color: rgb(49, 144, 232);
  width: 2.3rem;
  padding: 0.25rem 0rem 0.25rem 0rem;
  text-align: center;
}
.group {
  font-size: 0;
}
.size1 {
  border: solid 1px rgb(228, 228, 228);
  font-size: 0.55rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: inline-block;
  text-align: center;
  padding: 0.3rem 0rem 0.3rem 0rem;
  width: 2.3rem;
  color: rgb(102, 102, 102);
}
</style>