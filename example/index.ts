import Vue, { VNode } from "vue";
import Dev from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h): VNode => h(Dev),
}).$mount("#app");
