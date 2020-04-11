<template>
    <div>
        <div class="product-title">
            <i class="iconfont back" @click="back">&#xe691;</i>
           <p>产品详情</p>
        </div>

        <div class="product-info">
            <div class="product-info1">
                <div class="product-left">
                    <img :src="this.productinfo.image" alt="">
                </div>
                <div class="product-right">
                    <div class="right-content">
                        <p>{{this.productinfo.title}}</p>
                        <p class="price">参考价：{{this.productinfo.cankao_price}}</p>
                            <p class="price">产品说明书:</p>
                        <div class="info">
                            <p>{{this.productinfo.gongxiao}}</p>
                            <p>{{this.productinfo.zhuanggan}}</p>
                            <p>{{this.productinfo.season}}</p>
                            <p>{{this.productinfo.volume}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="product-buy"> 
            <div class="title">
                <p>购买推荐</p>
            </div>
            <div class="buy-info" v-for="(item,index) in this.otherWeb" :key="index">
                <ul>
                    <li>
                        <div class="buy-left">
                            <img :src="item.image" alt="">
                        </div>
                        <div class="buy-right">
                            <p class="title">{{item.name}}</p>
                            <p class="price">{{item.price}}</p>
                            <p class="price">市场价：<span class="price1">{{item.shop}}</span> <span class="iconfont pinglun">&#xe61e;{{item.comment_num}}人评价</span></p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <div class="tabs">
        <ElementTabs :datauser="user" :datatopic="topic" :datarelated="related"/>
        </div>
    </div>
</template>
<script>
import ElementTabs from './element-tabs/tabs'
export default {

    name:'ProductInfo',
    components:{
        ElementTabs
    },
    data(){
        return{
           productinfo:{},
           otherWeb:[],
           user:[],
           topic:[],
           related:[]
        }
    },
    props:{
         productinfoid:{
            type:[String,Number],
            required:true
        }
    },
    methods:{
        back(){
            this.$router.back()
        }
    },
    mounted(){
        this.$api.getProductinfo({
            id:this.productinfoid
        }).then(res=>{
            console.log(res.data.data)
            this.productinfo=res.data.data
            for(var i=0;i<res.data.data.otherWeb.length;i++){
                this.otherWeb.push(res.data.data.otherWeb[i])
            }
            for(var i=0;i<res.data.data.comment.user.length;i++){
                this.user.push(res.data.data.comment.user[i])
            }
            for(var i=0;i<res.data.data.topic.length;i++){
                this.topic.push(res.data.data.topic[i])
            }
            for(var i=0;i<res.data.data.related.length;i++){
                this.related.push(res.data.data.related[i])
            }
        })
    }
}
</script>
<style lang="less" scoped>
    .product-title{
        height: 60px;
        background: #FF406F;
        color: #fff;
        padding-top: 20px;
    i{
        float: left;
        font-size: 25px;
    }
    p{
        float: left;
        font-size: 23px;
        margin-left: 120px;
    }
    }
    .product-info{
        width: 100%;
            overflow: hidden;
        .product-info1{
            width: 345px;
            margin: 10px auto 0;
            text-align: left;
            .product-left{
                width: 30%;
                float: left;
                border: 2px solid #e5e5e5;
                box-sizing: border-box;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .product-right{
                width: 70%;
                float: left;
                box-sizing: border-box;
                padding-left: 20px;
                .right-content{
                    width: 100%;
                    height: 100%;
                    .price{
                        font-size: 14px;
                        margin-top: 5px;
                    }
                    .info{
                        margin-top:5px;
                        font-size: 12px;
                        color: #808080;
                    }
                }
            }
        }

    }
    .product-buy{
        width: 345px;
        margin: 20px auto 0;
        // overflow: hidden;
        .title{
            text-align: left;
            color: #808080;
        }
        .buy-info{
            width: 100%;
            
            li{
                overflow: hidden;
                padding: 15px;
                .buy-left{
                    width: 20%;
                    float: left;
                    border: 1px solid #e5e5e5;
                    box-sizing: border-box;
                    img{
                        width: 60px;
                        height: 60px;
                    }
                }
                .buy-right{
                    width: 80%;
                    float: left;
                    box-sizing: border-box;
                    padding-left: 20px;
                    p{
                        text-align: left;
                         margin-bottom: 5px;
                    }
                    .title{
                        color: #000;
                        margin-top: 5px;

                    }
                    .price{
                        font-size: 12px;
                        color: #808080;
                       
                     .price1{
                            text-decoration: line-through
                        }
                        .pinglun{
                            font-size: 12px;
                            float: right;
                        }
                    }
                } 
            }
        }
    }
    .tabs{
        width: 345px;
        margin: 0 auto;
    }

</style>