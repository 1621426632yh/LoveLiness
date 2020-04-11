<template>
    <div class="list">
        <div class="item">
            <div class="user" v-for="(ele,index) in productUser" :key="index">
                <router-link :to="{name:'DaRenDetail',params:{userid:{name:ele.username,userimg:ele.userimg,bigimg:ele.bigimg}}}">
                <img class="bigimg" :src="ele.userimg" alt="" style="width: 100%;height: 100%">
                <div class="user-info">
                    <p class="desc">{{ele.desc}}</p>
                    <div class="info">
                        <p class="user-img">
                            <img :src="ele.bigimg" alt="">
                        </p>
                        <span class="username">{{ele.username}}</span>
                        ❤<span>{{ele.num}}</span>
                    </div>
                </div>
                </router-link>
            </div>
        </div>
        <!-- 商品列表 -->
        <div class="productList">
            <h3>热品排行榜</h3>
            <div class="list-content" v-for="(item,index) in productList" :key="index">
                <router-link :to="{name:'ProductDetail',params:{info:{img:item.img,title:item.desc,price:item.qian,candi:item.candi,method:item.method,desc:item.desc2}}}">
                <div class="product-img">
                    <img :src="item.img" alt="">
                </div>
                <div class="product-info">
                    <p >{{item.desc}}</p>
                    <p class="desc">天猫</p>
                    <p class="yuan">￥ {{item.qian}}</p>
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
    import img1 from "../../../../assets/findimages/1.png"

export default {
    name:"ProductList",
    data(){
        return{
            productUser:[],
            productList:[],
            img1:img1,
            more:""
        }
    },
    mounted(){
        // 用户信息数据
        this.$api.getProductuser().then(res =>{
            if(res.data.data.status === 200){
                this.productUser = res.data.data.data
                // console.log(this.productUser)
            }
        })
        // 商品列表
        this.$api.getProductlist().then(res=>{
            console.log(res.data.data)
            if(res.data.data.status === 200){
                this.productList =res.data.data.data
                this.more = res.data.data.hasMore
                // console.log(this.productList)

            }
        })

        // 鼠标监听事件
        window.onscroll = () => {
            if (document.documentElement.scrollTop + 50 >
                document.documentElement.scrollHeight -document.documentElement.clientHeight) {
                    this.$api.getProductlist().then(res=>{
                        console.log(res.data.data)
                        if(res.data.data.status === 200){
                            this.productList = this.productList.concat(res.data.data.data)
                        }
                    })
            }
        };
    }
}
</script>
<style scoped>
.list{
    margin-top: 7rem;
}
.item{
    margin: 10px;
    display: flex;
}
.user{
    flex: 1;
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    padding-bottom: 10px;


}
.user .bigimg{
    width: 100%;
    height: 150px;
}
.user:nth-child(2n){
    margin-left: 10px;
}
.desc{
    padding: 7px 5px 5px;
    text-align: left;
    font-size: 14px;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
}
.info{
    margin-bottom: 15px;
    position: relative;
    font-size: 12px;
    /* padding-top: 15px; */
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
.username{
    display: inline-block;
    text-align: left;
    width: 70px;
    padding-left: 38px;
    margin-right: 15px;
}
.productList h3{
    font-size: 22px;
    margin: 20px 0 10px;
    text-align: center;
}
.list-content{
    display: flex;
    margin: 10px;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 8px;
}
.product-img{
    /* flex: 1; */
    width: 120px;
    height: 120px;
    float: left;
}
.product-img img{
    border-radius: 4px;
    width: 120px;
    height: 120px;
}
.product-info{
    /* flex: 8; */
    margin-left: 15px;
    float: right;
    font-size: 18px;
}
.product-info .desc{
    margin: 5px 0 20px;
}
.yuan{
    font-size: 20px;
}



</style>