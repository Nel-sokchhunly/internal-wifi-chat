import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';
import { createPinia } from 'pinia';

import './style.css';
import App from './App.vue';

// router
import routes from './router';
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes // short for `routes: routes`
});

// state management
const pinia = createPinia();

const app = createApp(App);

app.use(pinia);
app.use(router);
app.mount('#app');
