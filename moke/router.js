const express = require("express");
const router = express.Router();
const url = require('url');
const fs = require('fs');

//引入接口
//首页女神日记接口
const nvshen = require('./data/home_mei/nvshen')
//首页轮播图
const bannerImg = require('./data/home_mei/banner')
//精选文章接口
const jingxuan = require('./data/home_mei/jingxuan')


//发现页面接口
const Find = require("./data/home_mei/find")
const HotTalk = require("./data/home_mei/hottalk")
const beautyFG = require("./data/home_mei/beautyFG.js")
const productUser = require("./data/home_mei/proudctuser.js")
const productList = require("./data/home_mei/productList.js")
const UserInfo = require("./data/home_mei/userinfo.js")


//商品分类
const sorts =require('./data/sortData/sorts')
//商品详情
const xiangqing=require('./data/sortData/Xiangqing')

//用户
const guanzhu = require('./data/gzandfs/gz.js')
const fensi = require('./data/gzandfs/fs.js')
const picList=require('./data/upload/picture');
const tipList=require('./data/upload/dialy')


//首页女神日记接口
router.get("/nvshenone",(req,res)=>{
    res.send(nvshen)
})

//首页轮播图
router.get("/banners",(req,res) =>{
    res.send(bannerImg)
})

//精选文章
router.get('/jing',(req,res) =>{
    res.send(jingxuan)
})

// 发现页面
router.get("/find",(req,res)=>{
    res.send({
        data:Find
    })
})
// 最火话题
router.get("/hottalk",(req,res)=>{
    res.send({
        data:HotTalk
    })
})
// 最美达人
router.get("/beauty",(req,res)=>{
    res.send({
        data:beautyFG
    }) 
})
// 最热商品的用户页面
router.get("/productuser",(req,res)=>{
    res.send({
        data:productUser
    }) 
})
// 最热商品的商品列表
router.get("/productlist",(req,res)=>{
    res.send({
        data:productList
    }) 
})
// 用户信息列表
router.get("/userinfo",(req,res)=>{
    res.send({
        data:UserInfo
    })
})


router.get('/productlists',function(res,req){
    var sorts_id = res.query.id;
    var data = {}
    for(var i=0;i<sorts.data.length;i++){
        if(sorts.data[i].id == sorts_id){
            data = {
                status:200,
                data:sorts.data[i]
            }
            break;
        }
    }
    if(data){
        req.send(data);
    } else {
        req.send({
            status:200,
            msg:'error'
        })
    }
})

router.get('/productinfo',function(res,req){
    var sorts_id = res.query.id;
    var data = {}
    for(var i=0;i<xiangqing.data.length;i++){
        if(xiangqing.data[i].id == sorts_id){
            data = {
                status:200,
                data:xiangqing.data[i]
            }
            break;
        }
    }
    if(data){
        req.send(data);
    } else {
        req.send({
            status:200,
            msg:'error'
        })
    }
})


// 2.图片接口
router.get("/pic",(res,req)=>{
    req.send(picList)
})

//3.日记接口
router.get("/tip",(res,req)=>{
    req.send(tipList)
})

router.post('/login',function(res,req){
    let username = res.body.username;
    let password = res.body.password;
    console.log(username,password);
    if (username == 'admin' &&password == '123'){
        req.send({
            status:200,
            msg:'登录成功',
            token: true
        })
    }else{
        req.send({
            msg:'用户名或密码错误',
            token: false
        })
    }
})
// 粉丝接口
router.get('/mine/gzandfs',function(res,req){
    var type = res.query.id;
    if(type==1){
        req.send(guanzhu)
    } else if(type==2){
        req.send(fensi)
    } else {
        req.send({
            status:200,
            msg:'error'
        })
    }
    
})


module.exports = router