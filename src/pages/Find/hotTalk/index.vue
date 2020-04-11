<template>
    <div class="hot">
        <CallBack :title="title"/>
        <TopCard :hotimg="hotimg" :title="title"/>
        <div class="hottalkcontent">
            <h3>话题排行榜</h3>
            <div class="bang" v-for="(ele,index) in hotData" :key="index">
                <router-link :to="{name:'DaRenDetail',params:{userid:{name:ele.username,userimg:ele.userimg,bigimg:ele.bigimg}}}">
                <div class="bang-content">
                    <img :src="ele.bigimg" alt="">
                    <p class="product-desc">{{ele.desc}}</p>
                    <div class="user-info">
                        <p class="user-img">
                            <img :src="ele.userimg" alt=""> 
                        </p>
                        <span class="user-name">{{ele.username}}</span>
                        <i class="user-love">❤</i>
                        <span class="love-num">{{ele.num}}</span> 
                    </div>
                </div>
                </router-link>
            </div>
        </div>
        <!-- 加载更多 -->
        <div v-if="more">加载更多...</div>
        <div v-else>我是有底线的...</div>
    </div>
</template>
<script>
import CallBack from "../components/callback"
import TopCard from "../components/topcard"
import img1 from "../../../assets/findimages/pink3.jpg"
export default {
    name:"HotTalk",
    components:{
        CallBack,
        TopCard
    },
    data(){
        return{
            title:"最火话题",
            hotimg:img1,
            hotData:[],
            more:""
        }
    },
    mounted(){
        this.$api.getHottalk().then(res =>{
            console.log(res.data)
            if(res.data.data.status === 200){
                this.hotData = res.data.data.data
                this.more = res.data.data.hasMore
                console.log(this.hotData)
            }
        })
        // 鼠标监听事件
        window.onscroll = () => {
            if (document.documentElement.scrollTop + 50 >
                document.documentElement.scrollHeight -document.documentElement.clientHeight) {
                this.$api.getHottalk().then(res => {
                // console.log(res.data)
                if (res.data.data.status === 200) {
                    this.hotData = this.hotData.concat(res.data.data.data)
                }
                });
            }
        };
    }
}
</script>
<style scoped>
.hot{
    background-color: #fff;
}
.hottalkcontent{
    margin-top: 7rem;
    text-align: center;
    margin-bottom: 25px;
    background-color: #fff;
    
}
.hottalkcontent h3{
    font-size: 22px;
    margin: 20px;
}
.bang{
    width: 100%;
    margin: 10px;
    background-color: #fff;
    
}
.bang-content{
    float: left;
    width: 45%;
    margin-right: 10px;
    height: 245px;
    border-radius: 4%;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    overflow: hidden;
}
.bang-content img{
    width: 100%;
    height: 175px;
}
.bang-content:nth-child(2n){
    margin-left: 10px;
}
.product-desc{
    padding: 7px 5px 5px;
    text-align: left;
    font-size: 14px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.user-info{
    margin-bottom: 15px;
    position: relative;
    font-size: 12px;
}
.user-img{
     position: absolute;
     left: 5px;
}
.user-img img{
    width: 30px;
    height: 33px;
    border-radius: 15%;
}
.user-name{
    display: inline-block;
    text-align: left;
    width: 70px;
    padding-left: 28px;
    margin-right: 15px;
}
.user-love{
    padding-top: 10px;
    /* padding-left: 30px; */

}
</style>