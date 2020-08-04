<template>
  <div>
    <div class="head">
      <span>
        <van-icon name="arrow-left" style="float:left;margin-top:.5rem" @click="goback" />
        <span class="center">{{name}}</span>
      </span>
    </div>
    <van-image
      style="width:100%;height:7rem;margin-top:1rem"
      :src="'http://cangdu.org:8001/img/'+img"
    />  
   <p>{{description}}</p> 
   <p style="font-weight:bold">{{name}}</p> 
   <p>{{tips}}</p> 
   
  </div>
</template>
<script>
import Cookies from "js-cookie";
export default {
  data() {
    return {};
  },
  created() {
    this.name = Cookies.get("name");
    this.img = Cookies.get("image_path");
    this.tips = Cookies.get("tips");
    this.description = Cookies.get("description");
  },
  methods: {
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>
<style  scoped>
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
p{
  font-size: .4rem
}
</style>