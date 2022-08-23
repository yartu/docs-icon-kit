import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import YartuUIKit from '@yartu/ui-kit';

import './assets/css/index.css';
import './assets/css/output.css';
import '@/assets/css/input.css';

const app = createApp(App);

app.use(router);
app.use(YartuUIKit);

app.mount('#app');
