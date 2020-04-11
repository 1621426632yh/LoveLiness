<template>
    <div>
        <div class="pink-title">
            <router-link to="/find">
            <div class="back">
                 <i class="iconfont">&#xe691;</i>
            </div>
            </router-link>
            <div class="title">产品详情</div>
        </div>
        <div class="product-desc">
            <div class="desc-img">
                <img :src="info.img" alt="">
            </div>
            <div class="desc-content">
                <p class="content-title">{{info.title}}</p>
                <p>价格：{{info.price}}</p>
                <p>产地:{{info.candi}}</p>
                <p>用途：{{info.method}}</p>
                <p>成分：{{info.desc}}</p>
            </div>
        </div>

        <h3 class="h3">购买推荐</h3>
        <div class="sharebuy">
            <div class="sharebuy-item">
                <div class="buy-img">
                    <img :src="img1" alt="">
                </div>
                <div class="buy-desc">
                    <p class="http">美美网</p>
                    <p class="price">价格：￥345</p>
                    <p>销量：10万+</p>
                </div>
            </div>
            <div class="sharebuy-item">
                <div class="buy-img">
                    <img :src="img2" alt="">
                </div>
                <div class="buy-desc">
                    <p class="http">京东</p>
                    <p class="price">价格：￥299</p>
                    <p>销量：5万+</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import img1 from "../../../assets/findimages/ysl2.jpg"
import img2 from "../../../assets/findimages/3.png"
export default {
    name:"ProductDetail",
    data(){
        return{
            img1:img1,
            img2:img2,
        }
    },
    props:{
        info:{
            type:[String,Object],
            required:true
        }
    }
}
</script>
<style scoped>
.pink-title{
    background-color: #ff406f;
    color: #fff;
    font-size: 20px;
    height: 60px;
    display: flex;
    padding-top: 30px;
}
.pink-title .back{
    color: #fff;
    padding-left: 10px;
    flex: 2;
}
.back i{
    font-size: 26px;
    font-weight: 600;
}
.pink-title .title{
    flex: 8;
    padding-left: 110px;
}
.product-desc{
    margin: 10px;
    margin-top: 30px;
    /* border: 1px solid #ccc; */
    display: flex;
}
.desc-img{
    flex: 4;
}
.desc-content{
    flex: 6;
}
.desc-img img{
    width: 120px;
    height: 130px;
    border: 5px solid #ccc;
    border-radius: 10px;
    overflow: hidden;
    padding: 2px;
}
.content-title{
    font-weight: 600;
    font-size: 20px;
    margin: 7px 0;
}
.h3{
    font-size: 20px;
    margin: 20px 10px 10px;
    color: #666;
}
.sharebuy{
    margin: 10px;
    border: 3px solid #ccc;
    border-radius: 8px;
    padding-bottom: 20px;
}
.sharebuy-item{
    display: flex;
    padding: 20px 10px 0px;
}
.buy-img{
    flex: 3;
    border-radius: 8px;
    border: 4px solid #ccc;
    padding: 4px;
    width: 100px;
    height: 100px;
    overflow: hidden;
}
.buy-img img{
    width: 100%;
    height: 100%;

}
.buy-desc{
    flex: 7;
    margin-left: 20px;
}
.http{
    font-weight: 600;
    font-size: 20px;
    margin: 10px 0;
}
.price{
    margin-bottom: 10px;
}
</style>