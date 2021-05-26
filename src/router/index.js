import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Ad from '@/components/Ads/Ad'
import AdList from '@/components/Ads/AdList'
import NewAd from '@/components/Ads/NewAd'
import Login from '../components/Auth/Login'
import Registration from '@/components/Auth/Registration'
import Orders from '@/components/User/Orders'
import AuthGuard from './auth-guard'
import page404 from '@/components/page404'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '', name: 'home', component: Home },
    { path: '/ad/:id', name: 'ad', component: Ad, props: true, beforeEnter: AuthGuard },
    { path: '/adList', name: 'adList', component: AdList, beforeEnter: AuthGuard },
    { path: '/newAd', name: 'newAd', component: NewAd, beforeEnter: AuthGuard },
    { path: '/login', name: 'login', component: Login },
    { path: '/registration', name: 'registration', component: Registration },
    { path: '/orders', name: 'orders', component: Orders, beforeEnter: AuthGuard },
    { path: '*', component: page404 }
  ],
  mode: 'history'
})