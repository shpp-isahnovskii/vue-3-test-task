import { createApp } from 'vue';
import { createPinia } from 'pinia';
import ElementPlus from 'element-plus';
import App from './App.vue';
import LottieAnimation from "lottie-web-vue";

import './assets/main.css';

const app = createApp(App);
app.use(ElementPlus);
app.use(createPinia());
app.use(LottieAnimation);
app.mount('#app');
