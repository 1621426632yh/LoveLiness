<template>
    <div class="topcard">
        <div class="card">
            <img :src="hotimg" class="img" alt="">
            <div v-if="title" class="card-card">
                <p>{{title}}</p>
                <span>Top50</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"TopCard",
    data(){
        return{

        }
    },
    props:{
        hotimg:{
            type:String,
            default:"图片加载中"
        },
        title:{
            type:String,
            default:""
        }
    }
}
</script>

<style scoped>

.card{
    width: 94.3%;
    height: 10rem;
    margin: 10px;
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 4.5rem;
    border-radius: 0.5rem;
    overflow: hidden;
}
.img{
    width: 100%;
    height: 100%;
}
.card-card{
    position: absolute;
    left:50%;
    top: 45px;
    margin-left: -75px;
    background: #fff;
    width: 150px;
    text-align: center;
    color: #ff406f;
    font-size: 26px;
}
.card-card span{
    font-size: 22px;
}
</style>