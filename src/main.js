import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import store from './store'
import Particles from "vue3-particles";
import PrimeVue from 'primevue/config';

import 'primeicons/primeicons.css';
import Avatar from 'primevue/avatar';
import Menu from 'primevue/menu';

// createApp(App).mount('#app')

const app = createApp(App)
app.component('Avatar', Avatar)
app.component('Menu', Menu)

app.use(store)
app.use(router)
app.use(Particles)
app.use(PrimeVue);
app.mount('#app')
