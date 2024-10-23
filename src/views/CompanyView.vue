<template>
  <div class="company">
    <h1 class="president-message"><span>|</span>代表メッセージ</h1>
    <h3 class="company-name">株式会社creagination</h3>
    <div class="company-president">
      <h3 class="president">代表取締役社長</h3>
      <h3 class="president-name">山本理人</h3>
    </div>
    <p class="message">株式会社creaginationは世の中の想像力（imagination）を私たちの創造力（create）で世の中の価値を作り出すという理念を掲げて2024年10月に設立いたしました。
      SNSが普及した今の時代、様々な想像力を持った人がたくさんいます。それを実現できない、実現する方法がわからないという想いに満ち溢れていると考えております。それを世の中に価値として提供できるように全力を尽くして参ります。
    </p>
    <div>
      <h1 class="company-message"><span>|</span>Company Profile</h1>
      <div class="company-detail">
        <ul class="detail">
          <li class="detail-item">社名</li>
          <li class="detail-item">株式会社creagination</li>
        </ul>
        <ul class="detail">
          <li class="detail-item">設立日</li>
          <li class="detail-item">2024年10月</li>
        </ul>
        <ul class="detail">
          <li class="detail-item">代表取締役社長</li>
          <li class="detail-item">山本理人</li>
        </ul>
        <ul class="detail">
          <li class="detail-item">所在地</li>
          <li class="detail-item">〒107-0062東京都港区南青山2-2-15 Win Aoyamaビル UCF635</li>
        </ul>
        <ul class="detail">
          <li class="detail-item">営業時間</li>
          <li class="detail-item">10:00〜19:00</li>
        </ul>
        <ul class="detail">
          <li class="detail-item">定休日</li>
          <li class="detail-item">日曜・祝日</li>
        </ul>
        <ul class="detail">
          <li class="detail-item">事業内容</li>
          <li class="detail-item">
            SNSマーケティング事業
          </li>
          <li>
            SNSコンサルティング事業
          </li>
          <li>
            PR・MV・PV動画制作事業
          </li>
          <li>
            イベント企画事業
            イベント実行事業
            イベントマネジメント事業
          </li>
          <li>
            広告運用事業
          </li>
          <li>
            アパレル事業
          </li>
          <li>
            ライブ配信事務所
          </li>
        </ul>
      </div>
    </div>
    <div class="address">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.2249776063622!2d139.723891!3d35.671462000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c8303bade41%3A0x67e5ded2996f5b78!2z44Om44OK44Kk44OG44OD44OJ44Kq44OV44Kj44K544O75Y2X6Z2S5bGx44Kq44OV44Kj44K5!5e0!3m2!1sja!2sjp!4v1728561527612!5m2!1sja!2sjp"
        width="100%"
        height="450"
        style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompanyView'//ルーター(CompanyView.vue遷移する為に必要)
}
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0; /* インデントもなくしたい場合は padding も 0 に設定 */
  margin: 0; /* 必要に応じてマージンもリセット */
}

span {
  color: crimson;
}

h1 {
  font-family: 'Georgia', serif; /* Georgiaフォントに設定 */
}

li {
  font-family: 'Arial', sans-serif; /* Arialフォントに設定 */
}

.company {
  margin: 0 50px;
}

.president-message {
  font-size: 40px;
}

.company-detail {
  font-size: 20px;
}

.company-message {
  font-size: 40px;
  margin-top: 80px;
}

.detail {
  border-bottom: 1px solid grey;
  padding: 10px 0;
  text-align: left;
}

.company-name {
  font-size: 20px;
  opacity: 90%;
}

.message {
  font-family: 'Georgia', serif;
  font-size: 20px;
}

.company-president {
  display: flex;
}

.president {
  opacity: 90%;
  margin: 0;
}

.president-name {
  padding-left: 20px;
  opacity: 90%;
  margin: 0;
}

.address {
  margin-top: 50px;
}


/* PC対応 */
@media (min-width: 768px) {
  .company {
    padding-top: 100px;
  }
}


/* スマホ対応 */
@media (max-width: 768px) {
  .company {
    padding-top: 80px;
  }
}
</style>
