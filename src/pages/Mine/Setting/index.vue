<template>
    <div>
        <div class="header">
            <span class="backTo"  @click='backToBtn'>&lt;</span>
            <span class="title">设置</span>
        </div>
        <div class="settingBox">
            <ul>
                <router-link to="/mine"><li><i class="el-icon-user"></i><span>个人资料</span></li></router-link>
                <router-link to="/lastpage"><li><i class="el-icon-paperclip"></i><span>绑定</span></li></router-link>
                <router-link to="/lastpage"><li><i class="el-icon-office-building"></i><span>收货地址</span></li></router-link>
                <router-link to="/lastpage"><li><i class="el-icon-delete"></i><span>清除缓存</span></li></router-link>
                <router-link to="/lastpage"><li><i class="el-icon-remove-outline"></i><span>小屏模式</span></li></router-link>
                <router-link to="/lastpage"><li><i class="el-icon-document-checked"></i><span>消息推送</span></li></router-link>
                <router-link to="/aboutus"><li><i class="el-icon-question"></i><span>关于loveliness</span></li></router-link>
                <router-link to="/helping"><li><i class="el-icon-star-off"></i><span>帮助</span></li></router-link>
                <router-link to="/lastpage"><li><i class="el-icon-circle-plus"></i><span>意见反馈</span></li></router-link>
            </ul>
            <div class="logoutBtn" @click="logoutBtn"><button>退出登录</button></div>
            <!-- <div class="logoutBtn" @click="logout"><button>退出登录</button></div> -->
        </div>
    </div>
</template>

<script>
import store from "../../../store";
import {mapState, mapMutations} from 'vuex'
    export default {
        name:"Setting",
        methods:{
            // 数据库退出登录
            //  ...mapMutations('LoginModule',['clearToken','clearUser']),
            // logout(){
            //     localStorage.clear();
            //     this.clearToken(),
            //     this.clearUser(),
            //     this.$router.replace('/login')
            // },
            logoutBtn(){
                localStorage.removeItem('username');
                store.commit('setToken','')
                this.$router.replace('/login');
            },
            backToBtn(){
                this.$router.go(-1);
                console.log(111);
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
.settingBox{
    padding: 30px 10px;
    ul li{
        text-align: left;
        height: 45px;
        color: rgb(50, 54, 54);
        .myBtn{
            margin-left: 230px;
        }
    }
    .logoutBtn{
        margin-top: 25px;
        button{
            border-radius: 15px;
            font-size: 16px;
            width: 265px;
            height: 40px;;
            background-color: #FF406F; 
            outline: none;
            color: #fff;
        }
    }
}
</style>