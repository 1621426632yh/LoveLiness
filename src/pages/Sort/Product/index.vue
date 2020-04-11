<template>
    <div style="position:relative;"> 
        <!-- 产品:{{productid}} -->
        <div class="product-box">
        <div class="product-title">
           <i class="iconfont back" @click="back">&#xe691;</i>
           <p>{{title}}</p>
        </div>
        </div>
        <div class="product-list">  
            <div class="product-list1" >
                <div class="prodoct-left" v-for="(item,index) in info" :key="index">                 
                <router-link :to="{name:'ProductInfo',params:{productinfoid:item.id}}">
                      <div class="product-img">
                        <img :src="item.image" alt="">
                    </div>
                        <p class="produc-title">{{item.name}}</p>
                        <p class="product-price">参考价：{{item.price}}<i style="font-style: normal;">￥</i><span class="iconfont liaotian">&#xe61e;{{item.comment_num}}</span></p>
                </router-link>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"Product",
    data(){
        return{
            title:"",
            info:[],
        }
    },
    props:{
        productid:{
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
        this.$api.getProductlist({
            id:this.productid
        }).then(res=>{
            console.log(res.data.data)
            var cosmetics=res.data.data.cosmetics
            this.title=res.data.data.title
            for(var i=0;i<res.data.data.cosmetics.length;i++){
               this.info.push(cosmetics[i])
            }
        })
    }
}
</script>
<style lang="less" scoped>
.product-box{
    height: 150px;
    background: #FF406F;
    color: #fff;
    .product-title{
        padding-top: 20px;
    i{
        float: left;
        font-size: 25px;
    }
    p{
        float: left;
        font-size: 23px;
        margin-left: 130px;
    }
    }
}
.product-list{
    width: 100%;
    position: absolute;
    top:60px;
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