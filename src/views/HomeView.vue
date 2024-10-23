<template>
  <div class="home">
    <div class="alternate-name">
      <div class="title">
        <h1 class="fade-in" style="--delay: 0s">世の中の想像力と</h1>
        <h1 class="fade-in" style="--delay: 0.5s">弊社の創造力で</h1>
        <h1 class="fade-in" style="--delay: 1s">世の中に新しい価値を生み出す</h1>
      </div>
      <div class="home-sns">
        <div class="philosophy">
          <h1><span>|</span>時代に沿った価値を提供</h1>
          <h3>私たちは、創造力を活かした動画制作やSNS活用で、お客様のメッセージを効果的に伝え、ブランド価値を最大化するサポートを提供します。</h3>
        </div>
      </div>
      <div class="home-sns">
        <div class="philosophy">
          <h1><span>|</span>SNSマーケティング事業</h1>
          <h3>私たちのSNSマーケティング事業は、ブランドの成長をサポートし、効果的なコミュニケーションを実現します。</h3>
        </div>
      </div>
      <div class="home-sns">
        <div class="philosophy">
          <h1><span>|</span>SNSコンサルティング事業</h1>
          <h3>SNSコンサルティング事業を通じて、効果的なSNS戦略を提供し、ブランドの成長を支援します。</h3>
        </div>
      </div>
      <div class="home-sns">
        <div class="philosophy">
          <h1><span>|</span>PR・MV・PV動画制作事業</h1>
          <h3>PR・MV・PV動画制作事業を通じて、魅力的な映像でブランドのストーリーを伝え、心に響く印象を与えます。</h3>
        </div>
      </div>
      <div class="home-sns">
        <div class="philosophy">
          <h1><span>|</span>広告運用事業</h1>
          <h3>広告運用事業では、ターゲットに最適な広告戦略を提供し、効果的な集客と売上向上を実現します。</h3>
        </div>
      </div>
      <div class="home-sns">
        <div class="philosophy">
          <h1><span>|</span>アパレル事業</h1>
          <h3>アパレル事業では、トレンドを取り入れた魅力的なファッションを提案し、お客様の個性を引き立てる商品を展開します。</h3>
        </div>
      </div>
      <div class="home-sns">
        <div class="philosophy">
          <h1><span>|</span>ライブ配信事業</h1>
          <h3>ライブ配信事業では、リアルタイムでの双方向コミュニケーションを通じて、視聴者に臨場感あふれる体験を提供します。イベントや製品紹介など、多彩なコンテンツを高品質な映像で配信し、ブランドの魅力を効果的に伝えます。</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView', //ルーター(HomeView.vue遷移する為に必要)
  data() {
    return {
      features: [
        { id: 1, title: 'Feature 1', description: 'Description of feature 1' },
        { id: 2, title: 'Feature 2', description: 'Description of feature 2' },
        { id: 3, title: 'Feature 3', description: 'Description of feature 3' },
      ],
    };
  },
};
</script>

<style scoped>
h1 {
  font-family: 'Arial', sans-serif; /* Arialフォントに設定 */
}

.home {
  margin: 0 50px;
}

.alternate-name {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
}

/* アニメーションの設定 */
.fade-in {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 5s ease forwards;
  animation-delay: var(--delay);
  text-shadow: 
    3px 3px 0 rgba(255, 255, 255, 1),   /* 右下に白色の影 (縁取り) */
    -3px -3px 0 rgba(255, 255, 255, 1), /* 左上に白色の影 (縁取り) */
    3px 3px 0 rgba(255, 255, 255, 1),  /* 右上に白色の影 (縁取り) */
    -3px -3px 0 rgba(255, 255, 255, 1),  /* 左下に白色の影 (縁取り) */
    4px 4px 4px rgba(128, 128, 128, 0.7); /* 右下にグレーの影 */
}

.philosophy {
  margin-top: 50px;
}

.philosophy span {
  color: crimson;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

/* PC対応 */
@media (min-width: 768px) {
  .home {
  padding-top: 30px;
}

  .fade-in {
    font-size: 90px;
  }

  .home-sns {
    margin-top: 150px;
  }

  .philosophy h1 {
    font-size: 60px;
  }

  .philosophy h3 {
    font-size: 30px;
  }
}


/* スマホ対応 */
@media (max-width: 768px) {
  .home {
  padding-top: 30px;
}

  .fade-in {
    font-size: 35px;
    padding-top: 15px;
  }

  .home-sns {
    margin-top: 30px;
  }

  .philosophy h1 {
    font-size: 40px;
  }

  .philosophy h3 {
    font-size: 20px;
  }
}
</style>
