<template>
  <div class="home">
    <div class="alternate-name">
      <div class="home-sns" v-for="(business, index) in businesses" :key="index">
        <div class="philosophy">
          <h1><span>|</span>{{ business.title }}</h1>
          <h3>{{ business.description }}</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      businesses: [
        {
          title: '時代に沿った価値を提供',
          description:
            '私たちは、創造力を活かした動画制作やSNS活用で、お客様のメッセージを効果的に伝え、ブランド価値を最大化するサポートを提供します。',
        },
        {
          title: 'SNSマーケティング事業',
          description:
            '私たちのSNSマーケティング事業は、ブランドの成長をサポートし、効果的なコミュニケーションを実現します。',
        },
        {
          title: 'SNSコンサルティング事業',
          description:
            'SNSコンサルティング事業を通じて、効果的なSNS戦略を提供し、ブランドの成長を支援します。',
        },
        {
          title: 'PR・MV・PV動画制作事業',
          description:
            'PR・MV・PV動画制作事業を通じて、魅力的な映像でブランドのストーリーを伝え、心に響く印象を与えます。',
        },
        {
          title: '広告運用事業',
          description:
            '広告運用事業では、ターゲットに最適な広告戦略を提供し、効果的な集客と売上向上を実現します。',
        },
        {
          title: 'アパレル事業',
          description:
            'アパレル事業では、トレンドを取り入れた魅力的なファッションを提案し、お客様の個性を引き立てる商品を展開します。',
        },
        {
          title: 'ライブ配信事業',
          description:
            'ライブ配信事業では、リアルタイムでの双方向コミュニケーションを通じて、視聴者に臨場感あふれる体験を提供します。イベントや製品紹介など、多彩なコンテンツを高品質な映像で配信し、ブランドの魅力を効果的に伝えます。',
        }
      ],
    };
  },
};
</script>

<style scoped>
h1 {
  font-family: 'Georgia', serif;
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

.philosophy {
  margin-top: 50px;
}

.philosophy span {
  color: crimson;
}

@media (min-width: 768px) {
  .home {
    padding-top: 50px;
  }

  .philosophy h1 {
    font-size: 60px;
  }

  .philosophy h3 {
    font-size: 30px;
  }
}

@media (max-width: 768px) {
  .home {
    padding-top: 30px;
  }

  .philosophy h1 {
    font-size: 40px;
  }

  .philosophy h3 {
    font-size: 20px;
  }
}
</style>
