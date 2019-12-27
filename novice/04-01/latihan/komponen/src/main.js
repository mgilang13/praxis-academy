import Vue from "vue";
import App from "./App.vue";
import Employees from "./Employees.vue";

Vue.config.productionTip = false;

Vue.component("employees", Employees);

new Vue({
  render: h => h(App)
}).$mount("#app");
