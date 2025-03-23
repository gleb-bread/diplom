import { createApp } from 'vue';
import { createPinia } from 'pinia';
import createVuetify from '@/plugins/vuetify/vuetify';
import GloabalStyles from '@/plugins/varibles/style';

import App from './App.vue';
import { Router } from './app/router';
import { __init__ } from './plugins/core';
import { __start__ } from './shared/system/scripts/start';

const app = createApp(App);

app.use(createPinia());
app.use(Router);
app.use(createVuetify);
app.use(GloabalStyles);
app.use(__init__);

app.mount('#app');
