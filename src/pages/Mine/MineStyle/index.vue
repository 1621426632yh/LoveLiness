<template>
    <div>
        <div class="header-mine">
            <div class="kong">
                <span class="backTo"  @click='backToBtn'>&lt;</span>
            </div>
            <div class="p-mine">
            <p>我的</p>
            </div>
            <router-link exact to="/setting">
            <div class="icon-mine">
                <i class="el-icon-setting c-icon"></i>
            
            </div>
            </router-link>
        </div>
        <div class="ren">
            <div>
                <img :src="pic" alt="">
                <!-- <p class="author">{{user}}</p> -->
                <p class="author">admin</p>
                <p class="author">beautiful</p>
            </div>
        </div>
        <div class="three">
            <router-link to="/guanzhu">
                <div class="care">
                    <p>关注</p>
                </div>
            </router-link>

            <router-link to="/fans">
                <div class="care-right">
                    <p>粉丝</p>
                </div>
             </router-link>
        </div>
        <div class="four">
            <div class="xiaoxi">
                <i class="el-icon-chat-dot-square"></i>
                <p>消息</p>
            </div>
            <div class="xiaoxi">
                <i class="el-icon-star-off"></i>
                <p>收藏</p>
            </div>
             <router-link to="/signin" class="signin">
                <div class="xiaoxi">
                    <i class="el-icon-s-claim"></i>
                    <p>签到</p>
                </div>
             </router-link>
        </div>
    </div>
</template>
<script>
import {mapState, mapMutations} from 'vuex'
import pic from '../img/2.jpg'
export default {
    name:'Mine',
    data(){
        return{
             pic:pic,
            //  user:''
        }
    },
    methods:{
        backToBtn(){
                this.$router.go(-1); 
            }
      
    },
     computed:{
            ...mapState('LoginModule',{
                user:state =>state.user
            })
        }
}
</script>
<style lang="less" scoped>
a{
        color: rgb(0, 0, 0);
        text-decoration: none;
    }
.header-mine{
        box-sizing: border-box;
        display: flex;
        height: 75px;
        background: #FF406F;
        text-align:center;
        i{
           line-height: 70px;
            font-size: 23px;
            color: white;
        }
        .kong{
            flex: 1;
             .backTo{
                float: left;
                margin-left: 10px;
                font-size: 32px;
                font-weight: 300;
                color: #fff;
                margin-top: 12px;
            }
        }
        .p-mine{
            flex: 8;
             margin-top: 20px;
            p{
                font-size: 20px;
                color: white;
            }
        }
        .icon-mine{
            flex: 1;
            padding-right: 5px;
        }
    }
.ren{
   
    img{
         width: 130px;
         height: 130px;
         border-radius: 50%;
    }
       
  
    .author{
        font-size: 22px;
    }
}    
.three{
    // 关注粉丝
    border: 1px solid #FF406F;
    height: 50px;
    padding-bottom: 10px;
    margin: 10px;
    .care{
        float: left;
        margin-left: 70px;
        padding: 15px 10px 5px;
    }
    .care-right{
        float: right;
        margin-right: 70px;
        padding: 15px 10px 5px;
    }
}
.four{
    // 消息收藏签到
    
     height: 70px;
        width: 97%;
        margin: 100px auto;
        box-shadow: 5px 5px 30px rgba(0,0,0,.2);
        border-radius: 8px;
        display: flex;
    .xiaoxi{
         flex: 1;
         margin-left: 20px;
         margin-top: 12px;
         i{
             font-size: 23px;
         }
    }
    .signin{
        flex: 1;
        .xiaoxi{
         margin-left: 30px;
         margin-top: 12px;
         i{
             font-size: 23px;
         }
    }
    }
    
    
}

</style>