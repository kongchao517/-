<template>
    <div>
        <div class="head">
      <span>
        <van-icon name="arrow-left" style="float:left;margin-top:.5rem" @click="goback" />
        <span class="center">商家详情</span>
      </span>
    </div>
    <div >
        <div style="width:100%;height:.3rem;background-color:#C0C0C0">
        </div>
        <div style="width:100%;height:5.3rem;"> 
            <ul class="aa">
                <li>活动属性</li>
                <li><img src="../img/bao.gif" alt=""> 已加入外卖保计划，食品安全有保障 &nbsp;&nbsp;</li>
                <li> <img src="../img/准.gif" alt="">准时必达，超时秒赔</li>
                <li> <img src="../img/piao.gif" alt="">该商家支持开发票，请在下单时填写好发票抬头</li>
            </ul>
            </div>
        <div style="width:100%;height:.3rem;background-color:#C0C0C0"></div>
        <div style="width:100%;height:4rem;">
              <ul class="bb">
                <li>食品监督安全公示</li>
                <li>监督检查结果：差</li>
                <li> 检查日期：</li>
                <li><img src="../img/biaoqin.gif" alt="" > </li>
            </ul>
        </div>
        <div style="width:100%;height:.3rem;background-color:#C0C0C0"></div>
        <div style="width:100%;height:6rem;">
             <ul class="cc">
                <li>商家信息&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
                <li>效果演示</li>
                <li> 地址：广东省广州市越秀区中山五路219号华联购物中心F1</li>
                <li> 营业时间:[8:30/20:30]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</li>
                <li>营业执照</li>
            </ul>
        </div>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },methods:{
        goback(){
            this.$router.go(-1)
        }
    }
}
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
.aa li{
    display: inline-block;
    font-size: .4rem;
    margin-left: .5rem;
    
}
.aa li:not(:first-child){
  color:#6f656d;
    
}
.bb li{
  
    font-size: .4rem;
    margin-left: .5rem;
    line-height: 1.3rem
}
.bb li:not(:first-child){
 color:#6f656d;
    margin-left: 3.3rem
}
.bb li img{
  
   width: 2.5rem;
   height: 2.5rem;
   position: relative;
   right: 3rem;
   bottom: 2.5rem;
}
.cc li{
    line-height: 1rem;
    font-size: .4rem;
    margin-left: .5rem;
    
}
.cc li:not(:first-child){
  color:#6f656d;
    
}
</style>