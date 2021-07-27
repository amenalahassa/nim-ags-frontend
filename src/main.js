import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/scss/bootstrap.scss'
import { FontAwesomeIcon } from "./assets/js/icons";

createApp(App)
    .component("icons", FontAwesomeIcon)
    .use(router)
    .mount('#app');
