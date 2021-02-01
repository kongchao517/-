<template>
<div>
    <div class="bg">
        <div class="nav" style="color:yellow" ref="kk1">
            <ul>
                <li>
                    <a href="#">主页</a>
                    <ul>
                        <li>哈哈</li>
                        <li>呼呼</li>
                        <li>卡卡</li>
                    </ul>
                </li>
                <li>
                    <a href="#">新闻</a>
                    <ul>
                        <li>哈哈</li>
                        <li>呼呼</li>
                        <li>卡卡</li>
                    </ul>
                </li>
                <li>
                    <a href="#">联系</a>
                    <ul>
                        <li>哈哈</li>
                        <li>呼呼</li>
                        <li>卡卡</li>
                    </ul>
                </li>
                <li>
                    <a href="#">关于</a>
                    <ul>
                        <li>哈哈</li>
                        <li>呼呼</li>
                        <li>卡卡</li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
    <div class="flexbox">
        <div class="flexbox-item">
            <img src="../images/login.png" style="witth:100px;height:100px;border-radius:50%">
            <h3>1111</h3>
        </div>
        <div class="flexbox-item">
            <h3>2222</h3>
        </div>
        <div class="flexbox-item">
            <h3>3333</h3>
        </div>
    </div>
    <div class="jianbian"></div>
    <div class="jianbian1"></div>
    <div class="border"></div>
</div>
</template>
<script>
// import {ceshi} from '../api/request'
import _ from "lodash";
export default {
    name: "Home",
    data() {
        return {
            num: 0
        };
    },
    methods: {
     
    },
    mounted(){
        console.log("ref",this.$refs.kk1.style.color='red')

    },
    created() {
        var arr = ["a", "b", "c", "d", "e", "a", "b"];
        // var arr1=[{a:"1"},{b:"2"},{c:"3"},{d:"1"},{e:'2'}]
        var arrOne = _.intersection(arr);
        console.log("长度", arrOne);
        // ceshi("https://www.fastmock.site/mock/61dd5eff1af5801e52f2ab8babeee10e/api/checkD").then(res => {
        //     console.log(res)
        // }).catch(error => {
        //     console.log(error)
        // })
    },
};
</script>

<style scoped>
.flexbox {
    display: flex;
    margin-top: 150px;
}

.flexbox-item {
    width: 300px;
    background: #f4f4f4;
    border: 1px solid #cccccc;
    padding: 1rem;
    text-align: center;
    margin: 1rem;
}

.bg {
    width: 100%;
    height: 35px;
    background-color: red;
}

.nav {
    width: 800px;
    height: 35px;
    margin: 0 auto;

}

.nav ul li {
    width: 25%;
    text-align: center;
    line-height: 35px;
    float: left;
}
.nav ul li:hover {
background-color: bisque;
}

.nav ul li a {
    color: black;
}

.nav ul li ul li {
    width: 100%;
    float: none;
    display: none;
    border-bottom: 2px solid white;
}

.nav ul li:hover ul li {
    display: block;
    background-color: aquamarine;
    animation-name: myFrames;
    animation-duration: 5s;
}

@keyframes myFrames {
    0% {
        background: #827e64;
    }

    20% {
        background: #86bece;
    }

    50% {
        background: #af92aa;
    }

    90% {
        background: #698771;
    }
}

.jianbian1{
    width: 100%;
    height: 5px;
    border-bottom: 5px dashed black;
}
.nav ul li ul li:hover {
    width: 100%;
    background-color: salmon;
}

.jianbian {
    width: 100%;
    height: 100px;
    background-color: aqua;
    animation: what 3s steps(10, end) infinite;
}
.border{
    width: 200px;
    height: 200px;
    margin: 0 auto;
    background: repeating-conic-gradient(#fff, #000, #fff 1deg);
}

@keyframes what {
    0% {
        width: 100px;
        height: 100px;
        background-color: red;
        transform: rotate(70deg);
    }

    25% {
  width: 100px;
        height: 100px;
        margin-left: 25%;
        background-color: green;
        transform: rotate(140deg);

    }

    50% {
  width: 100px;
        height: 100px;
        background-color: yellow;
        transform: rotate(210deg);

    }

    75% {
      width: 100px;
        height: 100px;
        margin-left: 75%;
        background-color: bisque;
        transform: rotate(280deg);

    }

    100% {
       width: 100px;
        height: 100px;
        margin-left: 90%;
        background-color: burlywood;
        transform: rotate(360deg);

    }
}
</style>
