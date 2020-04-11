<template>
    <div>
        <div class="header">
            <span class="backTo"  @click='backToBtn'>&lt;</span>
            <span class="title">fans</span>
        </div>
        <ul>
            <li>
                <div class="left">
                   <img :src="pic1" alt="">
                </div>
                <div class="center">
                    <div>
                    <p>咿咿</p>
                    <p>20</p>
                     </div>
                </div>
                <div class="right">
                    <p>美的冒泡</p></div>
            </li>
             <li>
                <div class="left">
                   <img :src="pic2" alt="">
                </div>
                <div class="center">
                    <div>
                    <p>哥哥</p>
                    <p>20</p>
                     </div>
                </div>
                <div class="right">
                    <p>帅的一塌糊涂</p></div>
            </li>
             <li>
                <div class="left">
                   <img :src="pic3" alt="">
                </div>
                <div class="center">
                    <div>
                    <p>姐姐</p>
                    <p>20</p>
                     </div>
                </div>
                <div class="right">
                    <p>美的冒泡</p></div>
            </li>
             <li>
                <div class="left">
                   <img :src="pic4" alt="">
                </div>
                <div class="center">
                    <div>
                    <p>妹妹</p>
                    <p>20</p>
                     </div>
                </div>
                <div class="right">
                    <p>帅的一塌糊涂</p></div>
            </li>
            <li>
                <div class="left">
                   <img :src="pic5" alt="">
                </div>
                <div class="center">
                    <div>
                    <p>嘻嘻</p>
                    <p>21</p>
                     </div>
                </div>
                <div class="right">
                    <p>无敌是多么寂寞</p></div>
            </li>
        </ul>
    </div>
</template>
<script>
import pic1 from '../img/1.png'
import pic2 from '../img/2.jpg'
import pic3 from '../img/3.jpg'
import pic4 from '../img/4.jpg'
import pic5 from '../img/5.jpg'
export default {
    
    name:'Fans',
    data(){
        return{
            user:'',
            age:'12',
            msg:'',
            pic1:pic1,
            pic2:pic2,
            pic3:pic3,
            pic4:pic4,
            pic5:pic5,
        }
    },
    methods:{
        backToBtn(){
                this.$router.go(-1);
                
            }
    }
}
</script>
<style lang="less" scoped>
li{ list-style: none;}
a{
        color: rgb(0, 0, 0);
        text-decoration: none;
    }
.header{
    height: 60px;
    background-color: #FF406F;
    line-height: 60px;
    .backTo{
        float: left;
        margin-left: 10px;
        font-size: 32px;
        font-weight: 300;
        color: #fff;
    }
    .title{
        color: #fff;
        font-size: 18px;
        margin-right: 22px;
    }
    
}
ul {
     box-sizing: border-box;
            
    li{
        height: 80px;
        margin-top: 20px;
         box-sizing: border-box;
            display: flex;
        .left,.right,center{
            height: 60px;
           line-height: 60px;
            flex: 1;
            img{
                width: 50px;
                height: 50px;
            }
        }
    }
    }
</style>