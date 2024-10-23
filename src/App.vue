<template>
  <div class="app-container">
    <HeaderView /> <!-- ヘッダーを追加 -->
    <div class="main-content">
      <router-view /> <!-- 各ページがここに表示される -->
    </div>
    <FooterView /> <!-- フッターを追加 -->
  </div>
</template>

<script>
import HeaderView from './views/HeaderView.vue';
import FooterView from './views/FooterView.vue';

export default {
  name: 'App',
  components: {
    HeaderView,
    FooterView
  },
};
</script>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* ビューポート全体の高さを確保 */
}

.main-content {
  flex: 1; /* コンテンツが残りのスペースを埋める */
}

footer {
  background-color: #333;
  opacity: 80%; /* 透明度 */
  color: #fff;
  margin: 0;
  text-align: center;
  padding: 20px 0;
}
</style>
