import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

import "../public/stylesheets/main.css";

const app = createApp(App);

app.use(createPinia());

app.mount("#app");
