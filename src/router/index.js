import Vue from 'vue'
import Router from 'vue-router'

import login from '../views/login.vue' // 登录
import welcome from '../views/welcome'  // 欢迎页
import index from '../views/index';  // 首页
import page1 from '../views/page1/page1';  // 主体
import page2 from '../views/page2/page2';  // 主体
import ueditor from '../views/editor/ueditor';  // 富文本ueditor
import quill from '../views/editor/quill';  // 富文本quill
import mpoint from '../views/others/mpoint';  // 锚点
import vuex from '../views/vuex/vuex';  // vuex测试页

import fortest from '../views/fortest/test';  // 

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/',name: 'login',component: login},
    {
      path: '/index', component: index, name: 'index',  redirect: {name: 'welcome'}, 
        children: [
            {  path: 'fortest', component: fortest, name: 'fortest'  },
            {  path: 'welcome', component: welcome, name: 'welcome'  },
            {  path: 'page1', component: page1, name: 'page1'  },
            {  path: 'page2', component: page2, name: 'page2'  },
            {  path: 'quill', component: quill, name: 'quill'  },
            {  path: 'ueditor', component: ueditor, name: 'ueditor'  },
            {  path: 'mpoint', component: mpoint, name: 'mpoint'  },
            {  path: 'vuex', component: vuex, name: 'vuex'  },
        ]
    },
  ]
})
