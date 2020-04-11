<template>
    <div>
        <div class="product-list">  
            <div class="product-list1" v-for="(item,index) in data" :key="index">
                <div class="prodoct-left">                 
                      <div class="product-img">
                        <img :src="item.image" alt="">
                    </div>
                        <p class="produc-title">{{item.name}}</p>
                        <p class="product-price">参考价：<i style="font-style: normal;">￥{{item.price}}</i><span class="iconfont liaotian">&#xe61e;{{item.comment_num}}</span></p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"ChanPin",
    props:{
        data:{
            type:Array,
            default:[]
        }
    },
}
</script>
<style lang="less" scoped>
    .product-list{
    width: 100%;
    .product-list1{
        width: 345px;
        margin: 0 auto;
        .prodoct-left{
            width: 163px;
            height: 180px;
            float: left;
            margin-left: 8px;
            border-radius: 10px;
             box-shadow: 0 5px 5px rgba(0, 0, 0, 0.3);
            margin-bottom: 20px;
        }
        .product-img{
            width: 163px;
            height: 128px;
            img{
                width: 100%;
                height: 100%;
            }
        }
        p{
            font-family: 微软雅黑;
           padding: 5px 10px 0 10px;
           color: #808080;
        }
        .produc-title{           
                overflow: hidden;
                text-overflow:ellipsis;
                white-space: nowrap;
                font-size: 14px;
            }    
        .product-price{
            font-size: 12px;
            text-align: left;
            .liaotian{
                font-size: 12px;
                float: right;;
            }
        }   
    }   
}
</style>