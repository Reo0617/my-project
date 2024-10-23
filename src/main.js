// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // 作成したルーターをインポート
import 'normalize.css';

createApp(App)
  .use(router)  // アプリケーションにルーターを追加
  .mount('#app')
