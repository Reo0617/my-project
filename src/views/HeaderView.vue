<template>
  <header class="app-header">
    <div class="logo">
      <img class="logo-img" src="@/assets/logo2.webp" alt="">
    </div>
    <!-- メニュー切替ボタンを削除 -->
    <nav class="nav-links" :class="{ 'is-active': isMenuOpen }">
      <ul class="menu-list">
        <li class="menu-item"><router-link to="/">Home</router-link></li>
        <li class="menu-item"><router-link to="/company">Company</router-link></li>
        <li class="menu-item"><router-link to="/business">Business</router-link></li>
        <li class="menu-item"><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderView",
  data() {
    return {
      isMenuOpen: false, // メニューの開閉状態を管理
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen; // メニューの開閉を切り替え
    },
  },
};
</script>

<style scoped>
.app-header {
  background: linear-gradient(45deg, #000 50%, #282727 50%); /* 斜めに黒(#000)とグレー(#808080)を分割 */
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  font-family: 'Arial', sans-serif;
  font-weight: bold;
}

.logo-img {
  width: 30%;
  padding-top: 10px;
}

/* メニューの表示方法を変更 */
.nav-links {
  display: flex; /* 初めから表示 */
  position: static; /* スタティックに変更 */
  top: 60px; /* 上からの位置は必要に応じて調整 */
  width: 100%;
  font-family: bold;
}

.menu-list {
  display: flex; /* flexで��並びに */
  align-items: center; /* ��並びに */
}

.menu-item {
  margin-right: 30px;
}

.nav-links ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-links li {
  padding: 15px;
  text-align: center;
}

.nav-links a {
  color: #fff;
  text-decoration: none;
}

.nav-links a:hover {
  text-decoration: underline;
}

/* PC対応 */
@media (min-width: 768px) {
}


/* スマホ対応 */
@media (max-width: 768px) {
  .menu-item {
    font-size: 13px;
  }
}
</style>
