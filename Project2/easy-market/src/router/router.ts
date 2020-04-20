import React from 'react';
import {IRouterProp} from '../utils/interface'


// 引入一级路由
import LoginPage from '../views/LoginPage'
import FavorPage from '../views/FavorPage'
import MainPage from '../views/MainPage'
import GoodsDetailPage from '../views/GoodsDetailPage'
import TopicDetailPage from '../views/TopicDetailPage'



let config = {
    routes: [{
        path: '/login',
        component: LoginPage
    }, {
        path: '/favor',
        component: FavorPage
    }, {
        path: '/topicDetail/:id',
        component: TopicDetailPage
    }, {
        path: '/goodsDetail',
        component: GoodsDetailPage
    }, {
        path: '/main',
        component: MainPage,
    },{
        path: '*',
        redirect: '/main'
    }]
}

export default config as IRouterProp