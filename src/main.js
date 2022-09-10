import { createApp } from "vue";
import App from "./App.vue";
import "./index.scss";
import PrimeVue from "primevue/config";
import "primeicons/primeicons.css";
import { store, key } from "@/store";

createApp(App).use(PrimeVue).use(store, key).mount("#app");
