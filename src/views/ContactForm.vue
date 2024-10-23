<template>
  <div class="contact-form">
    <h2>お問い合わせ</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">お名前</label>
        <input type="text" id="name" v-model="form.name" required />
      </div>

      <div class="form-group">
        <label for="email">メールアドレス</label>
        <input type="email" id="email" v-model="form.email" required />
      </div>

      <div class="form-group">
        <label for="message">メッセージ</label>
        <textarea id="message" v-model="form.message" required></textarea>
      </div>

      <button type="submit">送信</button>
    </form>

    <!-- 送信後のメッセージ -->
    <p v-if="submitted">ありがとうございます。メッセージが送信されました。</p>
    <p v-if="errorMessage" style="color: red;">{{ errorMessage }}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ContactForm',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      },
      submitted: false,
      errorMessage: ''
    };
  },
  methods: {
    async submitForm() {
      try {
        // フォームの内容をサーバーに送信
        const response = await axios.post('YOUR_API_ENDPOINT', this.form);
        
        // 成功した場合
        console.log("フォーム送信成功: ", response.data);
        this.submitted = true;
        this.errorMessage = '';

        // フォームをリセット
        this.form.name = '';
        this.form.email = '';
        this.form.message = '';
      } catch (error) {
        // エラー処理
        console.error("フォーム送信エラー: ", error);
        this.errorMessage = '送信中にエラーが発生しました。再試行してください。';
      }
    }
  }
};
</script>

<style scoped>
.contact-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  margin-top: 150px;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input, textarea {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

textarea {
  height: 150px;
  resize: vertical;
}

button {
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #555;
}

p {
  margin-top: 20px;
  color: green;
  font-size: 16px;
}
</style>
