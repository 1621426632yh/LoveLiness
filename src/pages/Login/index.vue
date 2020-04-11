<template>
    <div class="login">
        <el-card class="box-card">
            <div slot="header" class="clearfix">
               <img :src="pic" alt="">
              <p>LOVELINESS</p>
                <!-- <span>登陆|注册</span> -->
            
            </div>
            <div class="biaodan">
                <el-form ref="form" :model="form" label-width="80px" 	>
                    <i class="el-icon-user icon" :class="flag?'active':''"></i>
                    <el-form-item label="用户名">
                        
                        <el-input v-model="form.username"  @focus="change1" autofocus></el-input>
                    </el-form-item>
                    <i class="el-icon-lock icon" :class="flag?'':'active'"></i>
                    <el-form-item label="密码">
                        <el-input  type="password" v-model="form.password"  @focus="change2"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="submit">立即登陆</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </el-card>
    </div>
</template>

<script>

import pic from '../../assets/LoginImg/1.png'
import api from '../../api'
import store from '../../store'
export default {
    name:"Login",
    data(){
        return{
            form:{},
            pic:pic,
            flag:true,
            username:'',
            password:'',
        }
    },
    methods:{
            change1(){
                this.flag = true;
            },
            change2(){
                this.flag = false;

            },
            // ...mapMutations("LoginModule",["setToken","setUser"]),
            submit(){
            api.getLogin({
                username:this.form.username,
                password:this.form.password,
            }).then(res=>{
                console.log(res)
                // alert(res.data.msg);
                if(res.data.status){
                    //  this.setToken(res.data.token);
                    store.commit('setToken',res.data.token);
                    store.commit('setUser',res.data.username);
                   localStorage.setItem("token",res.data.token);
                   localStorage.setItem("user",res.data.username);
                     this.$router.replace('/');
                    // localStorage.setItem('username',this.username);
                    //   this.setToken(res.data.token);
        //             this.setUser(res.data.data[0].username)
        //             localStorage.setItem("token",res.data.token);
        //             localStorage.setItem("user",res.data.data[0].username);
                }else{
                    alert(res.data.msg);
                    this.username = '';
                    this.password = '';
                }

            })},
    }
}
</script>

<style lang="less" scoped>

button{
    background: #FF406F;
    margin-left: -80px;
}
.el-input__inner:focus {
    border-color: #FF406F;
    outline: 0;
}
.login {
    width: 100%;
}
.icon{
    margin-top: 12px;
    position:absolute;
    left:25px;
    
}
.box-card {
    width: 375px;
    margin: 0 auto;
    margin-top: 100px;
    img{
        width: 200px;
        height: 110px;
        margin-bottom: 20px;
    }
    p{
        margin-bottom: 30px;
    }
}
.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
   
}
.clearfix:after {
    clear: both;
}
.active{
        color: red;
        }
</style>