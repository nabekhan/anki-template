import { createApp } from 'vue';
import App from './app.vue';

const container = document.createElement('div');
document.body.appendChild(container);

createApp(App).mount(container);