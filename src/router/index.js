import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home'
import Sort from '../pages/Sort'
import Find from '../pages/Find'
import Mine from '../pages/Mine'
import Layout from "../pages/Layout";
import Search from '../components/Search'
import Saomiao from '../pages/Home/saomiao'
import Commend from '../pages/Home/commend'
import Beauty from '../pages/Home/beauty'
import Video from '../pages/Home/beauty/video'
import Diary from '../pages/Home/beauty/diary'
import Jing from '../pages/Home/commend/list/jinxuan'
import Zi from '../pages/Home/commend/list/zi'

// 最热话题
import HotTalk from "../pages/Find/hotTalk/index.vue"
// 最火达人
import HotMan from "../pages/Find/hotman/index.vue"
// 最热商品
import HotProduct from "../pages/Find/hotProduct/index.vue"
// 达人详情页
import DaRenDetail from "../pages/Find/components/detail.vue"
// 商品详情页面
import ProductDetail from "../pages/Find/components/productdetail.vue"

//分类页面
import Product from '../pages/Sort/Product'
import ProdutInfo from '../pages/Sort/Product/ProductInfo'


//用户
import Login from '../pages/Login'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    children: [
      {
        path: '',
        name: 'home',
        component: Home,
        children: [
          {
            path: '',
            name: 'Commend',
            component: Commend,
          },
          {
            path: '/beauty',
            name: '/Beauty',
            component: Beauty,
            redirect: "/beauty/video",
            children: [
              {
                path: 'video',
                name: 'Video',
                component: Video,
              },
              {
                path: 'diary',
                name: 'Diary',
                component: Diary,
              },
            ]
          },
        ]
      },
      {
        path: 'find',
        name: 'Find',
        component: Find,
      },
      {
        path: 'sort',
        name: 'Sort',
        component: Sort,
      },
      {
        path: 'mine',
        name: 'Mine',
        component: Mine
      },
    ]
  },
  
  {
    path:'/search',
    component: Search
  },
  {
    path: '/saomiao',
    name: 'Saomiao',
    component: Saomiao,
  },
  {
    path: '/zi/:uname',
    name: 'zi',
    component: Zi,
    props:true
  },
  {
    path: '/jinxuan',
    component: ()=>import("../pages/Home/commend/list/jinxuan"),
  },
  {
    path: '/huodong',
    component: ()=>import("../pages/Home/commend/list/huodong"),
  },
  {
    path: '/mei',
    component: ()=>import("../pages/Home/commend/list/meiri"),
  },

  //发现页面
  {
    path: '/hottalk',
    name: 'hotTalk',
    component: HotTalk,
    props:true
  },
  {
    path: '/hotman',
    name: 'HotMan',
    component: HotMan
  },
  {
    path: '/hotproduct',
    name: 'HotProduct',
    component: HotProduct
  },
  {
    path: '/darendetail/:userid',
    name: 'DaRenDetail',
    component: DaRenDetail,
    props:true
  },
  {
    path: '/productdetail:info',
    name: 'ProductDetail',
    component: ProductDetail,
    props:true
  },


  //分类页面
  {
    path:'/product/:productid',
    name:'Product',
    component:Product,
    props:true
  },
  {
    path:'/productinfo/:productinfoid',
    name:"ProductInfo",
    component:ProdutInfo,
    props:true
  },

  //用户
  {
    path: '/setting',
    name:'setting',
    component: ()=>import("../pages/Mine/Setting"),
  },{
    path: '/guanzhu',
    name:'Guanzhu',
    component: ()=>import("../pages/Mine/GzAndFs"),
  },
  {
    path: '/fans',
    name:'fans',
    component: ()=>import("../pages/Mine/Fans"),
  },
  {
    path: '/signin',
    name:'signin',
    component: ()=>import("../pages/Mine/Signin"),
  },
  {
    path: '/lastpage',
    name:'lastpage',
    component: ()=>import("../pages/Mine/Setting/lastpage.vue"),
  },
  {
    path: '/helping',
    name:'helping',
    component: ()=>import("../pages/Mine/Helping"),
  },
  {
    path: '/aboutus',
    name:'aboutus',
    component: ()=>import("../pages/Mine/AboutUs"),
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  }
]

const router = new VueRouter({
  linkExactActiveClass: 'Active',
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta.isLogin) {
    var token = store.state.LoginModule.token
    if (token) {
      next();
    } else {
      next({
        path: "/login"
      })
    }
  } else {
    next();
  }
})

export default router
