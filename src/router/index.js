// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CompanyView from '../views/CompanyView.vue'
import BusinessView from '../views/BusinessView.vue'
import ContactForm from '../views/ContactForm.vue'
import HeaderView from '../views/HeaderView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/company',
    name: 'Company',
    component: CompanyView
  },
  {
    path: '/business',
    name: 'Business',
    component: BusinessView
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactForm
  },
  {
    path: '/header',
    name: 'Header',
    component: HeaderView
  }
]

const router = createRouter({
  history: createWebHistory(), // ヒストリーモードの設定..SEOに有利（URLがクリーンで検索エンジンに認識されやすい）。
  routes
})
//createRouterはルーターインスタンスを作成し、
//createWebHistoryでHTML5のヒストリーAPIを使ったクリーンなURL構造をサポートしつつ、
//routesでアプリケーションの各ページに対応するパスとコンポーネントのマッピングを定義しています。

export default router
