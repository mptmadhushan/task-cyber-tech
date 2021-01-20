import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#F4741D",
        secondary: "#03DC51",
        background: "#f1f1f1",
      },
    },
    options: {
      customProperties: true,
    },
  },
});
