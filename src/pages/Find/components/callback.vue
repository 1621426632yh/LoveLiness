<template>
    <div class="top">
        <div class="top-back">
            <div class="back" @click="callback">
               <i class="iconfont">&#xe691;</i>
            </div>
            <div id="title">{{title}}</div>
        </div>
    </div>
</template>
<script>
export default {
    name:"CallBack",
    data(){
        return{
        }
    },
    props:{
        title:{
            type:String,
            default:""
        }
    },
    methods:{
        callback(){
            this.$router.push("/find")
        }
    }
}
</script>
<style scoped>
.top{
    background: #ff406f;
    height: 10rem;
}
.top-back{
    color: #fff;
    display: flex;
    /* font-size: 24px; */
    padding-top: 1rem;
}
.back{
    flex: 2;
    padding-left: 10px;
    font-size: 26px;
}
.back i{
    font-size: 26px;
    font-weight: 600;
}
#title{
    padding-left: 55px;
    flex: 8;
    font-size: 20px;
}
</style>