import axios from '../uitls/http'
import base from './base'

const api = {
    //首页女神日记接口
    getNvShen(){
        return axios.get(base.baseUrl + base.nvshenone)
    },

    //首页女神日记接口
    getBanner(){
        return axios.get(base.baseUrl + base.banners)
    },

    //精选文章
    getJing(params){
        return axios.get(base.baseUrl + base.jing,{
            params
        })
    },

    /**
     * 发现页面接口
     */
    getFinds(){
        return axios.get(base.baseUrl + base.find)
    },
    /**
     *  最热话题
     */
    getHottalk(){
        return axios.get(base.baseUrl + base.hottalk)
    },
    /**
     * 最美达人
     */
    getBeauty(params){
        return axios.get(base.baseUrl + base.beauty,{
            params:params
        })
    },
    /**
     * 最热商品用户
     */
    getProductuser(){
        return axios.get(base.baseUrl + base.productuser)
    },
    /**
     * 最热商品列表
     */
    getProductlist(){
        return axios.get(base.baseUrl + base.productlist)
    },
    /**
     * 用户信息列表
     */
    getUserinfo(){
        return axios.get(base.baseUrl + base.userinfo)
    },


    //分类
    getProductlist(params){
        return axios.get(base.baseUrl + base.productlist, {
            params 
        })
     },
     
     //详情
     getProductinfo(params){
        return axios.get(base.baseUrl + base.productinfo, {
            params 
        })
     },


      /**
     * 登陆接口
     */
    getLogin(params) {
        return axios.post(base.baseUrl + base.login, params);
    },
       // 获取粉丝或者关注
       getFsAndGz(params){
        return axios.get(base.baseUrl + base.fsgz,{
            params
        })
    },
        // 4.日记接口
        getTip(params){
            return axios.get(base.baseUrl+base.getTip,{
                params
            })
        },
          getFindlogin(params){
        return axios.post(base.baseUrl+base.login,params)
    },


}

export default api