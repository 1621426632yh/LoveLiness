<template>
    <div>
        <CallBack  :title="title" />
        <topCard :hotimg="hotimg" :title="title" />
        <ProductList />
    </div>
</template>
<script>
import CallBack from "../components/callback"
import topCard from "../components/topcard"
import img1 from "../../../assets/findimages/8.png"
import ProductList from "./productList/index.vue"

export default {
    name:"HotProduct",
    data(){
        return{
            title:"最火商品",
            hotimg:img1
        }
    },
    components:{
        CallBack,
        topCard,
        ProductList
    }
}
</script>