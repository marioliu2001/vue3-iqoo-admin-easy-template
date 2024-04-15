import { createApp } from 'vue';
import App from './App.vue';

// 导入全局样式
import './styles/index.scss';

// 创建app
const app = createApp(App);

// 挂载
app.mount('#app');
