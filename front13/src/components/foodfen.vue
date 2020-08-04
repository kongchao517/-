<template>
  <div>
    <div class="backgroun-colors" style="text-align: center;">
      <span class="stysize1" style="float:left">
        <img style="width:.4rem" src="../img/img2.png" @click="goBack()" />
      </span>
      <span
        style="color:white;position: relative;top: -.2rem;fontSize:.5rem;margin-left:-.3rem;"
      >{{title}}</span>
    </div>
    <div style="padding-top:.3rem;width:100%;">
      <van-dropdown-menu>
        <van-dropdown-item :title="nameis" ref="p2">
          <van-row>
            <van-col span="12" style="fontSize:.55rem;background-color:#f0f0f0;color:#9e9e9e">
              <span style="color:#9e9e9e;fontSize:.55rem;">全部商品</span>
              <van-col
                span="24"
                v-for="(eat,index) in food"
                :key="eat.value"
                style="padding-left:.4rem;padding-top:.5rem;"
                @click="eatfood(index,eat.name,eat.id)"
              >
                <van-image
                  style="width:.5rem;heigth:.5rem;"
                  :src="'https://fuss10.elemecdn.com/'+eat.image_url"
                />
                <span style="margin-left:.5rem">{{eat.name}}</span>
                <span style="float:right;margin-right:.3rem">></span>
                <span
                  style="float:right;border-radius: 30%;background-color:#cbcbcb;color:white;margin-right:.3rem"
                >{{eat.count}}</span>
              </van-col>
            </van-col>

            <van-col span="12" style="overflow: auto;height:11.7rem;margin-left:-.3rem">
              <van-col
                @click="classify(eatchild.id,eatchild.count)"
                span="24"
                v-for="eatchild in food2"
                :key="eatchild.index"
                style="fontSize:.7rem;border-bottom:solid 0.01rem #f0f2f0;padding-top:.3rem;padding-bottom:.3rem;color:#9e9e9e;margin-left:.3rem"
              >
                {{eatchild.name}}
                <span style="float:right;margin-right:.5rem">{{eatchild.count}}</span>
              </van-col>
            </van-col>
          </van-row>
        </van-dropdown-item>
        <van-dropdown-item title="排序" ref="p1" class="vant-middle">
          <van-button @click="sort1(1)" type="default">
            <i style="color:#7fb7de;" class="el-icon-sort" /> 智能排序
          </van-button>
          <van-button @click="sort1(2)" type="default">
            <i style="color:#95d2e4;" class="el-icon-location-outline" /> 距我最近
          </van-button>
          <van-button @click="sort1(3)" type="default">
            <i style="color:#eba9aa;">
              <van-icon name="fire-o" />
            </i> 销售最高
          </van-button>
          <van-button @click="sort1(4)" type="default">
            <i style="color:#f0d174;">
              <van-icon name="gold-coin-o" />
            </i> 起送价最低
          </van-button>
          <van-button @click="sort1(5)" type="default">
            <i style="color:#abe3dd;" class="el-icon-time" /> 配送速度最快
          </van-button>
          <van-button @click="sort1(6)" type="default">
            <i style="color:#efba6a;" class="el-icon-star-off" /> 评分最高
          </van-button>
        </van-dropdown-item>

        <van-dropdown-item title="筛选">
          <div style="width: 100%;height: 6.5rem;">
            <div style=" width: 90%;height: 1.7rem; margin-left:.46rem;">
              <span
                style=" height: .6rem; text-align: left;font-size: .3rem;  float: left; width: 90%"
              >配送方式</span>
              <van-row>
                <van-col @click="OK(7)" :class="one7?'sx-button':'sx-button1'" span="7">
                  <img :class="one7?'sx-button-img1':'sx-button-img'" src="@/img/img8.png" />
                  <img :class="one7?'sx-button-img':'sx-button-img1'" src="@/img/fn.png" />
                  <span class="sx-button-fn" style="font-size: .3rem;">蜂鸟专送</span>
                </van-col>
              </van-row>
            </div>

            <div style=" width: 90%;height: 2.6rem; margin-left:.46rem;">
              <span
                style=" height: .6rem; text-align: left;font-size: .3rem;  float: left; width: 90%"
              >商家属性（可多选）</span>
              <van-row>
                <van-col
                  @click="OK(1)"
                  :class="one1?'sx-button':'sx-button1'"
                  span="7"
                  style="font-size: .3rem; text-align: left;"
                >
                  <img
                    :class="one1?'sx-button-img1':'sx-button-img'"
                    src="@/img/img8.png"
                    style="width:.625rem"
                  />
                  <span
                    :class="one1?'':'img-buttom'"
                    style="border:1px solid #3fbde6;border-radius: 2px;color:#3fbde6;padding: .025rem ;margin-left: .2rem;"
                  >品</span>
                  <span style>品牌商家</span>
                </van-col>
                <van-col
                  @click="OK(2)"
                  :class="one2?'sx-button':'sx-button1'"
                  span="7"
                  style="font-size: .3rem; margin-left:.45rem; text-align: left;"
                >
                  <img
                    :class="one2?'sx-button-img1':'sx-button-img'"
                    src="@/img/img8.png"
                    style="width:.622rem"
                  />
                  <span
                    :class="one2?'':'img-buttom'"
                    style="border:1px solid #57a9ff;border-radius: 2px;color:#57a9ff;padding: .025rem ;margin-left: .2rem;"
                  >准</span>
                  <span>准时达</span>
                </van-col>
                <van-col
                  @click="OK(3)"
                  :class="one3?'sx-button':'sx-button1'"
                  span="7"
                  style="font-size: .3rem; margin-left:.45rem; text-align: left;"
                >
                  <img
                    :class="one3?'sx-button-img1':'sx-button-img'"
                    src="@/img/img8.png"
                    style="width:.622rem"
                  />
                  <span
                    :class="one3?'':'img-buttom'"
                    style="border:1px solid #999999;border-radius: 2px;color:#999999;padding: .025rem ;margin-left: .2rem;"
                  >保</span>
                  <span>外卖保</span>
                </van-col>
              </van-row>

              <van-row>
                <van-col
                  @click="OK(4)"
                  :class="one4?'sx-button':'sx-button1'"
                  span="7"
                  style="font-size: .3rem; margin-top:.2rem; text-align: left;"
                >
                  <img
                    :class="one4?'sx-button-img1':'sx-button-img'"
                    src="@/img/img8.png"
                    style="width:.624rem"
                  />
                  <span
                    :class="one4?'':'img-buttom'"
                    style="border:1px solid #e8842d;border-radius: 2px;color:#e8842d;padding: .025rem ;margin-left: .2rem;"
                  >新</span>
                  <span>新店</span>
                </van-col>
                <van-col
                  @click="OK(5)"
                  :class="one5?'sx-button':'sx-button1'"
                  span="7"
                  style="font-size: .3rem; margin-left:.45rem;margin-top:.2rem; text-align: left;"
                >
                  <img
                    :class="one5?'sx-button-img1':'sx-button-img'"
                    src="@/img/img8.png"
                    style="width:.623rem"
                  />
                  <span
                    :class="one5?'':'img-buttom'"
                    style="border:1px solid #999999;border-radius: 2px;color:#999999;padding: .025rem ;margin-left: .2rem;"
                  >付</span>
                  <span>开发票</span>
                </van-col>
                <van-col
                  @click="OK(6)"
                  :class="one6?'sx-button':'sx-button1'"
                  span="7"
                  style="font-size: .3rem; margin-left:.45rem;margin-top:.2rem; text-align: left;"
                >
                  <img
                    :class="one6?'sx-button-img1':'sx-button-img'"
                    src="@/img/img8.png"
                    style="width:.623rem"
                  />
                  <span
                    :class="one6?'':'img-buttom'"
                    style="border:1px solid #ff4e00;border-radius: 2px;color:#ff4e00;padding: .025rem ;margin-left: .2rem;"
                  >付</span>
                  <span>在线支付</span>
                </van-col>
              </van-row>
            </div>

            <div style="background:#f1f1f1; width: 100%; height: 1.7rem;margin-top:.3rem;">
              <el-button
                plain快快快
                style="width: 4rem;margin-top:.18rem;height: 1rem; fontSize:.6rem;float:left;margin-left:.3rem"
                @click="empty"
              >清空</el-button>
              <el-button
                type="success"
                style="width: 4rem;margin-top:.18rem;height: 1rem;fontSize:.6rem;float:right;margin-right:.3rem"
              >
                确定
                <span v-if="count!=0">({{count}})</span>
              </el-button>
            </div>
          </div>
        </van-dropdown-item>
      </van-dropdown-menu>
    </div>

    <div style="height:.3rem;background-color:rgb(245,245,245);"></div>
    <div style="margin-left:.2rem;margin-top:.3rem">
      <img style="width:.6rem;float:left;" src="../img/img6.png" />
      <div style="float:left;color:#868787; fontSize:.5rem">附近商家</div>
    </div>
    <div>
      <div
        v-for="what1 in cangdu2"
        :key="what1.index"
        style="padding-left:.3rem;width:100%;float:left;margin-top:.7rem"
        @click="shop(what1.image_path,what1.piecewise_agent_fee.tips,what1.float_delivery_fee,what1.name,what1.activities,what1.id)"
      >
        <van-image
          style="width:2.5rem;float:left;height:2.5rem"
          :src="'http://cangdu.org:8001/img/'+what1.image_path"
        />
        <br />
        <div style="margin-top:-1.25rem">
          <div
            style="fontSize:.4rem;float:left;font-weight: bold;background-color:#ffdc00;margin-left:.4rem"
          >品牌</div>
          <div
            style="width:60%;position: relative; bottom: .1rem;fontSize:.55rem;font-weight: bold;  overflow: hidden;white-space: nowrap;text-overflow: ellipsis;"
          >{{what1.name}}</div>
        </div>
        <div style="margin-top:.3rem">
          <van-rate v-model="value" style="float:left;margin-left:.4rem" />
          <span style="fontSize:.4rem;color:#fb7f1e;float:left;margin-top:-.1rem">4.5</span>
          <span
            style="float:left;color:#6a6a6a;fontSize:.4rem;margin-top:-.1rem"
          >月售{{what1.recent_order_num}}单</span>
        </div>
        <div style="width:60%;">
          <span
            style="color:#333333;fontSize:.4rem;float:left;margin-top:.3rem;margin-left:.01rem;position: relative;top:-.8rem;left:2.7rem"
          >￥{{what1.float_minimum_order_amount}}起送/{{what1.piecewise_agent_fee.tips}}</span>
        </div>
        <span
          style="color:#868787;fontSize:.4rem;float:left;margin-top:-.5rem;margin-left:2.8rem"
        >{{what1.distance}}</span>
        <span
          style="color:#298eeb;fontSize:.4rem;float:left;margin-top:-.5rem"
        >/{{what1.order_lead_time}}</span>
        <div style="border: solid .03rem #f5f5f5;margin-top:2.5rem;margin-left:-.3rem"></div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Cookies from "js-cookie";
import { log } from "util";
export default {
  name: "foodson",
  data() {
    return {
      value: 3.5,
      count: 260,
      title: "",
      nameis: "全部商品",
      activeIndex: 0,
      items: [],
      food: [],
      items: [],
      food1: [],
      food2: [],
      value1: 0,
      value2: "a",
      value3: 1,
      cangdu2: [],
      cangdu: [],
      latitude: "",
      longitude: "",
      classifywhat: "",
      ii: 1,
      one1: true,
      one2: true,
      one3: true,
      one4: true,
      one5: true,
      one6: true,
      one7: true,
      count: 0
    };
  },
  methods: {
    OK(j) {
      if (j == 1) {
        this.one1 = !this.one1;
        if (this.one1 == false) {
          this.count += 1;
        } else {
          this.count -= 1;
        }
      } else if (j == 2) {
        this.one2 = !this.one2;
        if (this.one2 == false) {
          this.count += 1;
        } else {
          this.count -= 1;
        }
      } else if (j == 3) {
        this.one3 = !this.one3;
        if (this.one3 == false) {
          this.count += 1;
        } else {
          this.count -= 1;
        }
      } else if (j == 4) {
        this.one4 = !this.one4;
        if (this.one4 == false) {
          this.count += 1;
        } else {
          this.count -= 1;
        }
      } else if (j == 5) {
        this.one5 = !this.one5;
        if (this.one5 == false) {
          this.count += 1;
        } else {
          this.count -= 1;
        }
      } else if (j == 6) {
        this.one6 = !this.one6;
        if (this.one6 == false) {
          this.count += 1;
        } else {
          this.count -= 1;
        }
      } else if (j == 7) {
        this.one7 = !this.one7;
        if (this.one7 == false) {
          this.count += 1;
        } else {
          this.count -= 1;
        }
      }
    },
    shop(image, tip, float, name, activities, id) {
      console.log(id);
      Cookies.set("id", id);
      Cookies.set("activities", activities);
      Cookies.set("name", name);
      Cookies.set("img", image);
      Cookies.set("tips", tip);
      Cookies.set("float", float);
      this.$router.push({
        name: "details"
      });
    },
    classify(classify, count) {
      this.$refs.p2.toggle();

      axios
        .get(
          "http://cangdu.org:8001/restaurants?latitude=" +
            this.latitude +
            "&longitude=" +
            this.longitude +
            "&&offset=0&limit=20&extras[]=activities&keyword=&restaurant_category_id=&restaurant_category_ids[]=" +
            classify +
            "&delivery_mode[]=null" +
            "&limit" +
            count,
          {
            params: {
              type: "query"
            }
          }
        )
        .then(response => {
          this.cangdu2 = response.data;
        });
    },
    empty() {
      this.one1 = true;
      this.one2 = true;
      this.one3 = true;
      this.one4 = true;
      this.one5 = true;
      this.one6 = true;
      this.one7 = true;
      this.count = 0;
    },
    sort1(i) {
      this.$refs.p1.toggle();
      this.ii = i;

      axios
        .get(
          "http://cangdu.org:8001/shopping/restaurants?latitude=" +
            this.latitude +
            "&longitude=" +
            this.longitude +
            "&order_by=" +
            i,
          {
            params: {
              type: "query"
            }
          }
        )
        .then(response => {
          this.cangdu2 = response.data;
        });
    },

    goBack() {
      this.$router.push("/");
    },
    eatfood(index, name, classifyid) {
      this.classifywhat = classifyid;
      this.food2 = this.food[index].sub_categories;
      console.log(this.food2);
      if (name == "") {
        this.nameis = "全部商品";
      } else {
        this.nameis = name;
      }
    },
    asyncis() {}
  },
  created() {
    this.name = Cookies.set("eat.name");
    this.title = Cookies.get("titles.title");
    this.latitude = Cookies.get("latitude");
    this.longitude = Cookies.get("longitude");
    axios
      .get("http://cangdu.org:8001/shopping/v2/restaurant/category")
      .then(response => {
        this.food = response.data;
        console.log(this.food);
        for (let i = 0; i < response.data.length; i++) {
          this.items.push({
            text: response.data[i].name
          });
          this.food1.push(response.data[i].sub_categories);
        }

        this.asyncis();
      })
      .catch(function(error) {
        // handle error
      });
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
        console.log(response.data);
        this.cangdu2 = response.data;
      });
  }
};
</script>

<style scoped>
.backgroun-colors {
  background-color: rgb(49, 144, 232);
  width: 100%;
  height: 1.8rem;
  z-index: 1;
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
  margin-right: 0.3rem;
  position: relative;
  top: 0.5rem;
  float: right;
}

.vant-middle .van-button {
  text-align: left;
  width: 100%;
  font-size: 0.5rem;
  height: 2rem;
}

.sx-button {
  border: 0.02rem solid #eeeeee;
  color: #333333;
  height: 0.85rem;
  line-height: 0.85rem;
  border-radius: 3px;
  font-size: 0.1rem;
}

.sx-button1 {
  border: 0.02rem solid #eeeeee;
  color: #3789df;
  height: 0.85rem;
  line-height: 0.85rem;
  border-radius: 3px;
  font-size: 0.1rem;
}

.sx-button-img {
  float: left;
  margin-top: 0.13rem;
  margin-left: 0.2rem;
  width: 0.5rem;
  height: 0.5rem;
}

.sx-button-img1 {
  float: left;
  margin-top: 0.13rem;
  margin-left: 0.2rem;
  width: 0.5rem;
  height: 0.5rem;
  display: none;
}

.sx-button-fn {
  float: left;
  margin-left: 0.1rem;
}

.sx-button-fn1 {
  float: left;
  margin-left: 0.1rem;
  color: #3789df;
}

.img-buttom {
  display: none;
}
</style>
<style scoped>
</style>
