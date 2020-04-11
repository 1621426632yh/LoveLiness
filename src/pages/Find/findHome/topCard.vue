<template>
    <div>
        <div class="find-nav">
            <router-link to="hottalk">
                <div>
                    <img :src="img1" alt="">
                    <p>最火话题</p>
                </div>
            </router-link>
            <router-link to="/hotman" class="center">
                <div>
                    <img :src="img2" alt="">
                    <p>最火达人</p>
                </div>
            </router-link>
            <router-link to="/hotproduct">
                <div>
                    <img :src="img3" alt="">
                    <p>最热商品</p>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
import img1 from "../../../assets/findimages/1.png"
import img2 from "../../../assets/findimages/2.png"
import img3 from "../../../assets/findimages/3.png"
export default {
    name:"TopCard",
    data(){
        return{
            img1:img1,
            img2:img2,
            img3:img3
        }
    }
}
</script>

<style scoped>
.find-nav{
    display: flex;
    margin: 10px;
    padding: 10px;
    position: absolute;
    left: 0;
    top: 4.5rem;
    background: #fff;
    height: 10rem;
    border-radius: 0.5rem;
}
.find-nav div{
    flex: 1;
    text-align: center;
}
.find-nav p{
    color: #ff406f;
}
.find-nav img{
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
}
.center{
    margin-left: 10px;
    margin-right: 10px;
}
</style>