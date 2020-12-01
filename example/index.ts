import { createApp } from "vue";
import PhosphorVue from '@/entry';
import Dev from "./App.vue";

const app = createApp(Dev);
app.use(PhosphorVue);
app.mount("#app");
