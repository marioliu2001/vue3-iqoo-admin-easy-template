import { createApp } from 'vue';
import App from './App.vue';

// 引入路由
import router from './routers';
// 引入仓库pinia
import pinia from '@/stores/index.js'; // 引入路由

// 导入全局样式
import './styles/index.scss';

// 创建app
const app = createApp(App);
// 注册路由
app.use(router);
// 注册pinia
app.use(pinia);

// 挂载
app.mount('#app');
