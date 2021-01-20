import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import Routes from "./routes";
import VueRouter from "vue-router";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.filter("truncate", function(text, length, suffix) {
  if (text.length > length) {
    return text.substring(0, length) + suffix;
  } else {
    return text;
  }
});
const router = new VueRouter({
  routes: Routes,

  mode: "history",
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
new Vue({
  vuetify,
  render: (h) => h(App),
  router: router,
}).$mount("#app");
