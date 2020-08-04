<template>
  <div>
    <div :class="lxq?'food-class':'food-class1'">
      <div>
        <div class="food-color" @click="aa">
          {{name}}
          <div class="food-bottom">
            <span style="border:solid 0.02rem #555555;padding:.3rem;border-radius:30%">优惠消息</span>
          </div>
          <div
            style="float:left;margin-left:.8rem;margin-top:.5rem"
            v-for="is2 in cangdu2"
            :key="is2.value"
          >
            <div v-for="(at1,index) in cangdu3.activities" :key="index">
              <span style="background-color:red;color:white;font-size: .5rem;">{{at1.icon_name}}</span>
              <span style="color:white;font-size: .36rem;">{{at1.description}}(APP专享)</span>
            </div>
          </div>

          <div class="food-bottom">
            <span style="border:solid 0.02rem #555555;padding:.3rem;border-radius:30%">商家公告</span>
          </div>

          <div style="float:left;margin-left:.8rem;margin-top:.5rem">
            <span style="color:white;font-size: .5rem;">只为最好吃</span>
          </div>
        </div>
      </div>
      <div style="margin-top:13.5rem;text-align: center;">
        <img src="+.gif" @click="no" />
      </div>
    </div>
    <div :class="lxq?'yes':'yes1'">
      <van-icon
        name="arrow-left"
        style="position: fixed;margin-top:-5rem;z-index: 10;"
        color="#ffffff"
        @click="foodson"
      />
      <div style="position: fixed;margin-top:-5rem;">
        <van-image
          style="width:100%;float:left;height:4.5rem;filter: blur(5px);"
          :src="'http://cangdu.org:8001/img/'+this.imag"
        />
        <div class="shopheader-class">
          <van-image
            style="width:2.7rem;float:left;height:2.5rem"
            :src="'http://cangdu.org:8001/img/'+this.imag"
            @click="go(name)"
          />
          <div style>
            <div
              style="fontSize:.50rem;float-left;margin-left:.2rem;font-weight:1000;color:white;"
            >{{name}}</div>
            <p
              style="fontSize:.36rem;float-left;margin-left:.2rem;margin-top:.2rem;color:white;"
            >商家配送/分钟送达/配送费￥{{float}}</p>
            <p
              style="fontSize:.36rem;float-left;margin-left:.2rem;margin-top:.2rem;color:white;"
              v-for="is in cangdu2"
              :key="is.value"
            >{{is.promotion_info}}</p>
            <div v-for="is1 in cangdu2" :key="is1.value">
              <div
                style="fontSize:.4rem;float-left;margin-left:-2.5rem;margin-top:.4rem;color:white;"
                v-for="(at,index) in cangdu3.activities"
                :key="index"
              >
                <span style="background-color:red;margin-left:2.5rem">{{at.icon_name}}</span>
                {{at.description}}(APP专享)
                <span
                  style="margin-left:8.5rem;position: relative;top:-.5rem"
                  @click="no"
                >{{is1.activities.length}}个活动></span>
              </div>
            </div>
            <div><img src="../img/img1.png" alt="" style="position: relative;top:-2.5rem;left:9rem" @click="shangping"> </div>
          </div>
          
        </div>
         
      </div>
     
      <div style="width:100%;margin-top:5rem;">
        <van-tabs title-active-color="blue" color="blue" line-width="35px" v-model="active">
          <van-tab title="商品">
            <van-row>
              <van-col span="6">
                <ul style="fontSize:.5rem;" v-for="(i,index) in foodlist" :key="i.index">
                  <li class="line" @click="cli(index)">
                    <span style="margin-left:.4rem">{{i.name}}</span>
                  </li>
                </ul>
                <li
                  style="overflow: hidden;border-top: solid .01rem #ebebeb;background-color: #f5f5f5;color: #767676;list-style: none;height:16rem"
                >&nbsp;</li>
              </van-col>
              <van-col
                span="18"
                style="  overflow: hidden;white-space: nowrap;text-overflow: ellipsis;height:19rem;overflow:scroll"
              >
                <div v-for="(a,index) in foodlist" :key="a.index">
                  <div
                    :id="'ll'+index"
                    style="fontSize:.7rem;font-weight:800; color:#767676;border:0.06rem solid #f1f1f1 ; background-color: #f5f5f5;line-height: 1.5rem;"
                  >
                    <span style="position: relative;left: .3rem;">{{a.name}}</span>
                    <span style="fontSize:.4rem;position: relative;left: .4rem;">{{a.description}}</span>
                  </div>

                  <div v-for="ss in a.foods" :key="ss.key">
                    <div
                      style="width:100%height:6rem;border-bottom: solid 0.02rem #ebebeb;margin-top:1rem"
                    >
                      <div style="float:left">
                        <van-image
                          @click="xiangq(ss.name,ss.description,ss.tips,ss.image_path)"
                          style="width:2.7rem;float:left;height:3rem"
                          :src="'http://cangdu.org:8001/img/'+ss.image_path"
                        />
                      </div>
                      <div style>
                        <div
                          style="fontSize:.36rem;color:#393939;margin-bottom:.2rem;position: relative;left:.2rem"
                        >{{ss.name}}</div>

                        <div
                          style="fontSize:.36rem;color:#b5b5b5;margin-bottom:.2rem;position: relative;left:.2rem"
                        >{{ss.description}}</div>
                        <div
                          style="fontSize:.36rem;margin-bottom:.2rem;position: relative;left:.2rem"
                        >{{ss.tips}}</div>
                        <div
                          v-for="(ok,index) in ss.specfoods"
                          :key="index"
                          v-show="index==0"
                          style="fontSize:.6rem;color:#ff6600;;margin-bottom:.2rem;position: relative;left:.2rem"
                        >
                          ￥{{ok.price}}
                          <span style="color:#393939;fontSize:.45rem;">起</span>
                          <span
                            style="color:#393939;fontSize:.45rem;float:right;margin-right:.5rem"
                          >
                            <span v-for="(ct,index) in counts" :key="index">
                              <i
                                v-if="ct.id===ss._id&&ct.count>0"
                                @click="Sub(ss,ok.price)"
                                style="font-size:.6rem"
                                class="el-icon-remove-outline"
                              ></i>
                              <span
                                style="fontSize:.6rem"
                                v-if="ct.id===ss._id&&ct.count>0"
                              >{{ct.count}}</span>
                            </span>
                            <i
                              @click="Add(ss,ok.price)"
                              style="font-size:.7rem"
                              class="el-icon-circle-plus"
                            ></i>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </van-col>
            </van-row>
            <ul class="allfoods">
              <li class="outside">
                <ul v-if="price>0" :class="dian1?'head-shop':'head-shop1'">
                  <li>
                    <span style="color:#949595;fontSize:.55rem;margin-left:.5rem;">购物车</span>

                    <span @click="sz" style="color:#949595;fontSize:.55rem;margin-left:7rem">
                      <van-icon
                        name="delete"
                        size=".75rem"
                        style="padding-right:.1rem;position: relative;top:-1.1rem"
                      />
                      <span style="position: relative;top:-1.3rem">清空</span>
                    </span>
                  </li>
                  <li style="background-color:white;">
                    <ul>
                      <li v-for="a in counts" :key="a.name">
                        <div v-show="a.count!=0">
                          <span style="fontSize:.5rem;font-weight:1000;">{{a.name}}</span>
                          <span style="fontSize:.5rem;font-weight:1000;">￥{{a.money}}</span>
                          <span style="float:right">
                            <i
                              @click="Sub1(a.id,a.money)"
                              style="font-size:.8rem"
                              class="el-icon-remove-outline"
                            ></i>

                            <span style="fontSize:.5rem">{{a.count}}</span>
                            <i
                              @click="Add1(a.id,a.money)"
                              style="font-size:.8rem"
                              class="el-icon-circle-plus"
                            ></i>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="foot">
                <br />
                <van-row>
                  <van-col style="margin-top:-1rem" span="5" class="ff1" @click="dian">
                    <div class="gou">
                      <p class="gou2">
                        <van-icon
                          name="shopping-cart"
                          color="white"
                          :info="num"
                          size=".9rem"
                          style="position: relative;left:.2rem;top:.2rem;"
                        />
                      </p>
                    </div>
                  </van-col>
                  <van-col style="margin-top:-1rem" span="11" class="ff2" @click="dian">
                    <p
                      style="color:white;font-size:.6rem;font-weight: 600;margin:.2rem 0 0 0;"
                    >￥{{okl}}</p>
                    <p
                      style="color:white;margin-top:.3rem;padding-left:.1rem;font-size:.36rem;"
                    >配送费5</p>
                  </van-col>
                  <van-col style="margin-top:-1.32rem" span="8" class="ff3">去结算</van-col>
                </van-row>
              </li>
            </ul>
          </van-tab>
          <van-tab title="评价" v-for="it in pj" :key="it.value">
            <div class="evaluateLeft">
              <p class="evaluateLeft1">{{it.overall_score.toFixed(1)}}</p>
              <p class="evaluateLeft2">综合评价</p>
              <p class="evaluateLeft3">高于周边商家76.9%</p>
            </div>

            <div class="evaluateright">
              <div style="margin-top: .45rem;margin-left:1.5rem">
                <p class="evaluateright1">
                  服务态度
                  <van-rate
                    readonly
                    void-color="#ff6700"
                    gutter="0"
                    size=".2rem"
                    v-model="it.food_score"
                  />
                  <span class="evaluateright1-span">{{it.food_score.toFixed(1)}}</span>
                </p>
                <p class="evaluateright1">
                  菜品评价
                  <van-rate
                    readonly
                    void-color="#ff6700"
                    gutter="0"
                    size=".2rem"
                    v-model="it.service_score"
                  />
                  <span class="evaluateright1-span">{{it.service_score.toFixed(1)}}</span>
                </p>
                <p class="evaluateright1">
                  送达时间
                  <span class="evaluateLeft3">{{it.deliver_time}}分钟</span>
                </p>
              </div>
            </div>
            <div style="float: left;background-color:#f5f5f5;width: 100%;height: .4rem;"></div>

            <div class="evaluatemain">
              <div class="evaluatemain1">
                <div
                  class="evaluatemain1-butt"
                  v-for="aq in itis[0]"
                  :key="aq.name"
                >{{aq.name}}({{aq.count}})</div>
              </div>
            </div>

            <div class="evaluatebottom" v-for="zx in itis1[0]" :key="zx.value">
              <div style="width:100%;">
                <img
                  style="width:1.5rem;border-radius:50%;float:left;margin-left:.4rem"
                  src="https://fuss10.elemecdn.com/1/5f/6cf782b0c9cd5ca8daa7f76ab05aejpeg.jpeg"
                />

                <span style="fontSize:.55rem;float:left;margin-left:.5rem">{{zx.username}}</span>
                <span style="fontSize:.35rem;float:right;">{{zx.rated_at}}</span>
              </div>
              <div style="float:left;width:100%;margin-left:2.5rem;margin-top:-1.4rem;">
                <span style="fontSize:.36rem">
                  <van-rate
                    readonly
                    void-color="#ff6700"
                    gutter="0"
                    size=".2rem"
                    v-model="it.food_score"
                  />
                  {{zx.time_spent_desc}}
                </span>
                <div v-for="qy in zx.item_ratings" :key="qy.idea">
                  <div style="width:100% ;">
                    <van-image
                      style="float:left;width:2.7rem;float:left;height:2.7rem;margin-right:.3rem"
                      :src="'https://fuss10.elemecdn.com/'+qy.image_hash"
                    />
                  </div>
                  <div></div>
                </div>
                <span
                  class="classis"
                  v-for="qy1 in zx.item_ratings"
                  :key="qy1.idea"
                >{{qy1.food_name}}</span>
              </div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>

<script>
let Breadcount = [];

import axios from "axios";
import Cookies from "js-cookie";
import { log } from "util";
export default {
  name: "shop",
  data() {
    return {
      img: "",
      tips: "",
      float: "",
      activities: [],
      latitude: "",
      longitude: "",
      id: "",
      cangdu2: [],
      cangdu3: {},
      active: "",
      foodlist: [],
      shopmessage: [],
      pj: [],
      v: 4,
      itis: [],
      itis1: [],
      lxq: true,
      num: [],
      fontcount: [],
      counts: [],
      price: 0,
      num: 0,
      dian1: true,
      name1: "",
      okl: 0
    };
  },

  created() {
    this.id = Cookies.get("id");
    this.activities = Cookies.get("activities");
    this.name = Cookies.get("name");
    this.float = Cookies.get("float");
    this.imag = Cookies.get("img");
    this.tips = Cookies.get("tips");
    this.latitude = Cookies.get("latitude");
    this.longitude = Cookies.get("longitude");
    if (Cookies.get("ui") != undefined) {
      this.num = Cookies.get("ui");
    }
    if (Cookies.get("uiIS") != undefined) {
      this.okl = Cookies.get("uiIS");
      this.price = this.okl;
    }

    axios
      .get("http://cangdu.org:8001/shopping/restaurant/" + this.id, {
        params: {
          type: "query"
        }
      })
      .then(response => {
        this.cangdu3 = response.data;
        this.cangdu2.push(response.data);
      });

    this.shopid = this.$route.query.id;

    axios
      .get("http://cangdu.org:8001/shopping/v2/menu?restaurant_id=" + this.id)
      .then(Response => {
        this.foodlist = Response.data;
        console.log("商品列表：", this.foodlist);
      });

    axios
      .get(
        "http://cangdu.org:8001/ugc/v2/restaurants/" +
          this.id +
          "/ratings/scores"
      )
      .then(Response => {
        this.pj.push(Response.data);
        console.log("商品分数：", this.pj);
      });

    axios
      .get(
        "http://cangdu.org:8001/ugc/v2/restaurants/" + this.id + "/ratings/tags"
      )
      .then(Response => {
        this.itis.push(Response.data);
        console.log("商品评价1：", this.itis);
      });

    axios
      .get(
        "http://cangdu.org:8001/ugc/v2/restaurants/" +
          this.id +
          "/ratings?offset=0&limit=10"
      )
      .then(Response => {
        this.itis1.push(Response.data);
        console.log("商品评价：", this.itis1);
      });
  },
  methods: {
    shangping(){
this.$router.push({
        name: "shangping"
      });
    },
    aa() {
      this.lxq = true;
    },
    sz() {
      (this.counts = []), (this.num = 0);
      this.okl = 0;
      Cookies.set("ui", this.num);
      Cookies.set("uiIS", this.okl);
      if (this.okl == 0) {
        this.dian1 = true;
      }
    },
    Sub1(id, money1) {
      for (let index = 0; index < this.foodlist.length; index++) {
        for (let qq = 0; qq < this.foodlist[index].foods.length; qq++) {
          if (this.foodlist[index].foods[qq]._id === id) {
            this.Sub(this.foodlist[index].foods[qq], money1);
          }
        }
      }
    },
    Add1(id, money1) {
      for (let index = 0; index < this.foodlist.length; index++) {
        for (let qq = 0; qq < this.foodlist[index].foods.length; qq++) {
          if (this.foodlist[index].foods[qq]._id === id) {
            this.Add(this.foodlist[index].foods[qq], money1);
          }
        }
      }
    },
    dian() {
      console.log(11);
      if (this.okl == 0) {
        return -1;
      }
      this.dian1 = !this.dian1;
    },
    xiangq(name,description,tips,image_path) {
       Cookies.set("image_path", image_path);
      Cookies.set("name", name);
      Cookies.set("description", description);
      Cookies.set("tips", tips);
      this.$router.push({
        name: "xiangqing"
      });
    },
    go(name) {
      Cookies.set("nameshop", name);
      this.$router.push({
        name: "food"
      });
    },
    Add(food, price) {
      //增加数量

      this.name1 = food.name;
      let count = 0;
      for (let index = 0; index < this.counts.length; index++) {
        //获取cookie中存的数量
        if (this.counts[index].id === food._id) {
          //如果cookie中的id与食品id相等
          count = this.counts[index].count; //将历史数量写入
        }
      }
      count = ++count; //增加数量

      this.okl += parseInt(price);

      this.num++;
      Cookies.set("ui", this.num);
      Cookies.set("uiIS", this.okl);
      let Stopid = Cookies.get("id"); //获得商家id
      let id = food._id; //获得食品id
      let money = food.specfoods[0].price; //获得食品价格
      let name = food.name; //获得食品名称
      let shopCarDiv = true; //购物车的显示
      Breadcount = this.counts;

      if (JSON.stringify(Breadcount).indexOf(JSON.stringify(id)) == -1) {
        //如果没有直接写入
        Breadcount.push({
          Stopid,
          name,
          money,
          count,
          id,
          shopCarDiv
        });
      } else {
        //如果存在进行判断
        for (let index = 0; index < Breadcount.length; index++) {
          if (Breadcount[index].id === id) {
            Breadcount[index].count = count;
            Breadcount[index].shopCarDiv = true;
          } else {
            continue;
          }
        }
      }
      Cookies.set("historycount", Breadcount);
      this.counts = JSON.parse(Cookies.get("historycount"));
    },

    Sub(food, price) {
      //减少数量

      let count = 0;
      for (let index = 0; index < this.counts.length; index++) {
        //获取cookie中存的数量
        if (this.counts[index].id === food._id) {
          //如果cookie中的id与食品id相等
          count = this.counts[index].count; //将历史数量写入
        }
      }

      count = --count; //减少数量

      if (this.okl > 0) {
        this.okl -= parseInt(price);
      }
      this.num--;
      Cookies.set("ui", this.num);
      Cookies.set("uiIS", this.okl);
      //   Cookies.set("numis",this.num)

      //  this.in1=Cookies.get('numis')

      Breadcount = this.counts;
      let id = food._id;
      for (let index = 0; index < Breadcount.length; index++) {
        if (Breadcount[index].id === id) {
          Breadcount[index].count = count;
          if (Breadcount[index].count <= 0) {
            this.a--;
          }
        }
      }
      Cookies.set("historycount", Breadcount);
      this.counts = JSON.parse(Cookies.get("historycount"));
    },

    no() {
      this.lxq = !this.lxq;
    },
    foodson() {
      this.$router.go(-1);
    },
    cli(id) {
      document.getElementById("ll" + id).scrollIntoView({
        block: "start"
      });
    }
  },
  mounted() {
    this.num = 0;
    this.okl = 0;

    if (Cookies.get("historycount") != undefined) {
      this.counts = JSON.parse(Cookies.get("historycount"));
      for (let h = 0; h < this.counts.length; h++) {
        if (this.counts[h].Stopid == this.id) {
          this.num += this.counts[h].count;

          this.okl += this.counts[h].money * this.num;
        }
      }
    }
  }
};
</script>

<style scoped>
.shopheader-class {
  width: 78%;
  z-index: 10;
  float: left;
  margin-left: 0.4rem;
  margin-top: 0.4rem;
  position: relative;
  bottom: 4.5rem;
}

.rxbspan {
  font-size: 0.5rem;
  color: #888888;
  font-weight: bold;
}

.card {
  text-align: left;
  line-height: 0.6rem;
  background-color: white;
  margin-top: 0.05rem;
}

.icon1 {
  border: 1px solid red;
  background: red;
  color: white;
  border-radius: 3px;
}

.icon2 {
  border: 1px solid green;
  background: green;
  color: white;
  border-radius: 3px;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 100%;
  height: 100%;
  background-color: #262626;
  color: white;
  font-size: 0.5rem;
}

.yhborder {
  font-size: 0.35rem;
  border: 1px solid white;
  width: 1.7rem;
  border-radius: 10px;
  margin: auto;
}

.evaluation {
  width: 99%;
  height: 4rem;
  border: 1px solid red;
}

.evaluation_left {
  float: left;
  margin: 0.4rem 0.3rem;
  width: 90%;
  height: 3rem;
  border: 1px solid black;
}

.evaluation_right {
  float: left;
  margin: 0.4rem 0.4rem;
  width: 90%;
  height: 3rem;
  border: 1px solid black;
}

.evaluateLeft {
  float: left;
  /* border:1px solid red; */
  width: 40%;
  height: 3rem;
  background-color: white;
  text-align: center;
}

.evaluateright {
  float: left;
  /* border:1px solid blue; */
  width: 60%;
  height: 3rem;
  background-color: white;
}

.evaluateLeft1 {
  color: #ff6600;
  font-size: 0.8rem;
  /* font-weight: bold; */
  margin-bottom: 0;
  margin-top: 0.3rem;
}

.evaluateLeft2 {
  margin-bottom: 0;
  margin-top: 0.1rem;
  font-size: 0.4rem;
}

.evaluateLeft3 {
  margin-bottom: 0;
  margin-top: 0.1rem;
  font-size: 0.3rem;
  color: #999999;
}

.evaluateright1 {
  text-align: left;
  font-size: 0.42rem;
  margin-bottom: 0;
  margin-top: 0.15rem;
  margin-left: 0.2rem;
}

.evaluateright1-span {
  font-size: 0.3rem;
  color: #ff6600;
}

.evaluatemain {
  float: left;
  width: 100%;
  height: auto;

  /* border: 1px solid red; */
}

.evaluatemain1 {
  float: left;
  width: 95%;
  height: auto;
  margin-top: 0.1rem;
  /* border: 1px solid blue; */
}

.evaluatemain1-butt {
  float: left;
  color: #6d7885;
  background-color: #ebf5ff;
  padding: 0.3rem;
  border-radius: 0.2rem;
  font-size: 0.6rem;
  margin-left: 0.2rem;
  margin-top: 0.1rem;
}

.evaluatemain1-butt:hover {
  background: #3190e8;
  color: white;
}

.evaluatebottom {
  float: left;
  height: 6rem;
  border-top: 1px solid #f1f1f1;
  border-bottom: 1px solid #f1f1f1;
  width: 95%;
  margin-top: 0.3rem;
  margin-left: 0.2rem;
}

.rxb {
  color: black;
  font-size: 0.45rem;
  background-color: white;
  height: 2.5rem;
  margin-top: -0.5rem;
  border-left: 2px solid steelblue;
}

.line {
  line-height: 2.5rem;
  border-top: solid 0.01rem #ebebeb;
  background-color: #f5f5f5;
  color: #767676;
}

.classis {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  float: left;
  font-size: 0.5rem;
  width: 1.5rem;
  margin-top: 3rem;
  position: relative;
  right: 6rem;
  margin-right: 1.2rem;
  border: solid 0.01rem #ebebeb;
  padding: 0.2rem;
  color: #999999;
}

.food-class {
  float: left;
  background-color: #262626;
  width: 100%;
  height: 100vh;
  display: none;
}

.food-class1 {
  float: left;
  background-color: #262626;
  width: 100%;
  height: 100vh;
  display: block;
}

.food-color {
  color: white;
  font-size: 0.7rem;
  text-align: center;
  padding-top: 1rem;
}

.food-bottom {
  font-size: 0.45rem;
  margin-top: 3rem;
}

.yes {
  display: block;
}

.yes1 {
  display: none;
}

.foot {
  width: 100%;
  height: 2.2rem;
  background-color: #3d3d3f;
  /* position: fixed;
    bottom: 0;
    left: 0; */
}

.ff1 {
  height: 1.5rem;
  background-color: #3d3d3f;
}

.ff2 {
  height: 1.5rem;
  background-color: #3d3d3f;
}

.ff3 {
  height: 2.2rem;
  background-color: #4cd964;
  color: white;
  font-size: 0.5rem;
  font-weight: 600;
  text-align: center;
  padding: 0.75rem;
}

.gou {
  width: 1.6rem;
  height: 1.6rem;
  background-color: #444444;
  position: relative;
  bottom: 0.8rem;
  left: 0.4rem;
  border-radius: 50%;
}

.gou2 {
  width: 1.3rem;
  height: 1.3rem;
  background-color: #3190e8;
  border-radius: 50%;
  position: relative;
  left: 0.13rem;
  top: 0.14rem;
}

.head-shop {
  background-color: #eceff1;
  width: 100%;
  /* position: relative;
    bottom: 5.5rem;
    left: 0; */
  z-index: 500;
  display: none;
}

.head-shop1 {
  background-color: #eceff1;
  width: 100%;
  /* position: relative;
    bottom: 5.5rem;
    left: 0; */
  z-index: 500;
}

.outside {
  width: 100%;
}

.allfoods {
  position: fixed;
  width: 100%;
  bottom: 0;
}
</style>
