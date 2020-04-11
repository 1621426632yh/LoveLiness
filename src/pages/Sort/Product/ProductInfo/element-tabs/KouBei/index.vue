<template>
    <div>
        <div class="koubei">
            <div class="koubei-left">
                <p>4.0</p>
                <p><span class="active">☆</span><span class="active">☆</span><span class="active">☆</span><span class="active">☆</span><span>☆</span></p>
            </div>
            <div class="koubei-right">
                <div class="xingji">
                    <ul class="xingji-left">
                        <li>五星</li>
                        <li>四星</li>
                        <li>三星</li>
                        <li>二星</li>
                        <li>一星</li>
                    </ul>
                    <ul class="xingji-right">
                        <li><p style=" width: 80%;"></p></li>
                        <li><p style=" width: 80%;"></p></li>
                        <li><p style=" width: 40%;"></p></li>
                        <li><p style=" width: 14%;"></p></li>
                        <li><p style=" width: 7%;"></p></li>
                    </ul>
                    <ul class="xingji-right2">
                        <li>80%</li>
                        <li>80%</li>
                        <li>40%</li>
                        <li>14%</li>
                        <li>7%</li>
                    </ul>
                </div>
            </div>
        </div>
            <div class="wrap">
                <div class="user" v-for="(item,index) in data" :key="index">
                  <div class="user-name">
                        <p>{{item.name}}</p>
                    </div>
                    <div class="user-left">
                        <div class="user-img">
                            <img :src="item.head" alt="">
                        </div>
                    </div>
                    <div class="user-right">
                        {{item.msg}}
                    </div>
                </div>


            </div>
    </div>
</template>
<script>
export default {
    name:"KouBei",
    data(){
        return{

        }
    },
    props:{
        data:{
            type:Array,
            default:[]
        }
    },
    mounted(){
      
    }
}
</script>
<style lang="less" scoped>
 .koubei{
     width: 345px;
     margin: auto ;
     overflow: hidden;
     .koubei-left{
         width: 40%;
         float: left;
        text-align: center;
        margin-top: 10px;
        font-family: 微软雅黑;
        color: #626262;
        .active{
            color: #FD3E72;
        }
     }
     .koubei-right{
         width: 60%;
         float: left;
         .xingji{
             overflow: hidden;
             .xingji-left{
                 font-size: 12px;
                 float: left;
                 margin-right: 13.5px;
                 li{
                      color: #626262;
                     margin-bottom: 5px;
                 }
             }
             .xingji-right{
                 float: left;
                 li{
                     width: 117px;
                     height: 7.5px;
                     border: 1px solid #C6C6C6;
                     border-radius: 4px;
                     margin-bottom: 10px;
                    
                     p{
                         height: 100%;
                         background: #FD3E72;
                     }
                 }
             }
             .xingji-right2{
                 float: left;
                 font-size: 10px;
                      margin-left: 4px;
                 li{
                      color: #626262;
                      margin-bottom: 5px;
                 }

             }
         }
     }
 }

 .wrap{
     width: 100%;
     margin: 10px auto 0;
     .user{
         width: 100%;
         margin-bottom: 10px;
        .user-name{
             text-align: left;
                font-size: 10px;
             }
         .user-left{
             margin-top: 10px;
         overflow: hidden;
             width: 20%;
             float: left;
             .user-img{
                 width: 40px;
                 height: 40px;
                 margin: 0 auto;
                 img{
                     width: 40px;
                     height: 40px;
                 }
             }
         }
         .user-right{
             width: 70%;
             height: 40px;
             margin-top: 10px;
             overflow: hidden;
             box-sizing: border-box;
             padding-left: 17px;
             font-size: 10px;
             color: #626262;
         }
     }
 }
</style>