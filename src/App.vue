<template>
  <v-app id="app">
    <Header />
    <v-main app>
      <router-view></router-view>
    </v-main>
    <!-- <v-footer>
      <Footer />
    </v-footer> -->
  </v-app>
</template>

<script>
import Header from "./components/Header";
// import Footer from "./components/Footer";
export default {
  name: "App",

  components: {
    Header,
    // Footer,
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
#app {
  background-color: var(--v-background-base);
}
</style>
