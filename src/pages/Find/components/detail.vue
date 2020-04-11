<template>
    <div class="detail">
        <div class="pink-background">
            <router-link to="/find" class="back">
                 <i class="iconfont">&#xe691;</i>
            </router-link>
            <span class="top-title">文章 </span>
            <span class="share"> 分享</span>
        </div>
        <div class="card">
            <div class="tximg">
                <img class="userimg" :src="userid.userimg" alt="">
            </div>
            <div class="userinfo">
                <div class="message">
                    <div>
                        <p class="username">{{userid.name}}</p>
                        <p>{{num}}粉丝</p>
                    </div>
                </div>
                <div class="guanzhu" @click="GuanZhu">
                    <span>{{gzdata}}</span>
                </div>
            </div>
            <div class="card-img">
                <img :src="userid.bigimg" alt="">
            </div>
        </div>
        <!-- 评论列表 -->
        <div class="userlist">
            <div class="v-for" v-for="(ele,index) in userList" :key="index">
                <div class="userlist-img">
                    <img :src="ele.userimg" alt="">
                </div>
                <div class="userlist-info">
                    <p>{{ele.author}}</p>
                    <p>{{ele.desc}}</p>
                </div>
                <div class="time">
                    <span>{{ele.time}}</span>
                </div>
            </div>
        </div>
        <hr class="hrr" />
        <p class="all">查看全部评论</p>

    </div>
</template>

<script>
import img1 from "../../../assets/findimages/pink11.jpg"
export default {
    name:"Detail",
    data(){
        return{
            img1:img1,
            userList:[],
            guanzhu:true,
            gzdata:"关注ta",
            num:214
        }
    },
    props:{
       userid:{
           type:[String,Object],
           required:true
       }
    },
    mounted(){
       this.$api.getUserinfo().then(res=>{
           console.log(res.data)
           this.userList = res.data.data.data
           console.log(this.userList)
       })     
    },
    methods:{
        // 关注
        GuanZhu(){

            if(this.guanzhu){
                this.gzdata="已关注";
                this.num+=1;
                this.guanzhu=false;
            }else{
                this.gzdata="关注ta";
                this.num-=1;
                this.guanzhu=true;
            }
            
        }
    }
}
</script>

<style scoped>
*{
    font-size: 18px;
}
.detail{
    position: relative;
}
.pink-background{
    display: flex;
    color: #fff;
    background: #ff406f;
    height: 10rem;
    font-size: 20px;
    padding-top: 15px;
}
.top-title,.back,.share{
    flex: 1;
    text-align: center;
    font-size: 20px;

}
.back{
    text-align: left;
    padding-left: 15px;
}
.back i{
    font-weight: 600;
    font-size: 26px;
}
.share{
    text-align: right;
    padding-right: 15px;
}
.pink-background i{
    color: #fff;
}
.card{
    margin: 10px;
    background: #fff;
    box-shadow: 0 2px 15px #ccc;
    border-radius: 8px;
    width: 94.5%;
    position: absolute;
    top:65px
}
.tximg{
    position: relative;
}
.userimg{
    border-radius: 8px;
    position: absolute;
    left: 10px;
    top:-15px;
    width: 70px;
    height: 75px;
}
.userinfo{
    display: flex;
}
.message{
    flex: 1;
    padding-left: 110px;
    margin-top: 10px;
}
.username{
    padding-bottom: 3px;
}
.guanzhu{
    flex: 1;
    margin-top: 20px;
    padding-left: 80px;
}
.guanzhu span{
    border: 1px solid #ccc;
    padding: 3px 15px;
    font-size: 14px;
    border-radius: 20px;
}
.card-img{
    margin: 17px 10px 20px;
    width: 94.5%;
    height: 170px;
    border-radius: 8px;
    overflow: hidden;
}
.card-img img{
    width: 100%;
    height: 100%;
}
.userlist-img img{
    width: 50px;
    height: 50px;
    border-radius: 8px;
}
.userlist{
    margin: 13rem 10px 20px;
}
.v-for{
    display: flex;
    margin-bottom: 20px;
}
.userlist .userlist-img{
    flex: 1.6;
}
.userlist .userlist-info{
    flex: 5;
}
.userlist .time{
    flex: 1.62;
}
.time span{
    font-size: 14px;
}

.hrr{
    margin: 0 10px;
    background: #eee;
    font-size: 2px;
}
.all{
    color: #ff406f;
    text-align: center;
    margin-top: 10px;
}

</style>


