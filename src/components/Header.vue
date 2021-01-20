<template>
  <div>
    <div class="pa-2 d-none d-lg-block">
      <v-layout row wrap justify-center class="text-center">
        <v-flex md2 xs6>
          <v-btn text small color="var(--v-primary-base)" active-class="red"
            >Save More on app</v-btn
          >
        </v-flex>
        <v-flex md2 xs6>
          <v-btn text small color="var(--v-primary-base)">sell on daraz</v-btn>
        </v-flex>
        <v-flex md2 xs6>
          <v-btn text small color="var(--v-primary-base)">track my order</v-btn>
        </v-flex>
        <v-flex md2 xs6>
          <v-btn text small color="var(--v-primary-base)">login</v-btn>
        </v-flex>
        <v-flex md2 xs6>
          <v-btn text small color="var(--v-primary-base)">Signup</v-btn>
        </v-flex>
        <v-flex md2 xs6>
          <v-btn text small color="var(--v-primary-base)">customer care</v-btn>
        </v-flex>
      </v-layout>
    </div>

    <v-app-bar color="#fff" flat dark>
      <v-img
        class="d-none d-lg-block "
        :src="require('../assets/logo.png')"
        contain
        height="80%"
      />

      <v-text-field
        solo
        v-model="searchKey"
        label="Search here..."
        type="text"
        class="pt-6 d-none d-lg-block "
      >
        <template v-slot:append>
          <v-fade-transition leave-absolute>
            <div>
              <v-btn large color="var(--v-primary-base)" dark
                ><v-icon>mdi-magnify</v-icon></v-btn
              >
            </div>
          </v-fade-transition>
        </template>
      </v-text-field>

      <v-btn icon class="d-none d-lg-block ">
        <v-icon color="black">mdi-cart</v-icon>
      </v-btn>

      <v-img
        :src="require('../assets/logo2.png')"
        contain
        height="80%"
        class="d-none d-lg-block "
      />
      <div class="d-lg-none">
        <v-img
          :src="require('../assets/logo.png')"
          contain
          height="50px"
          width="100px"
          class="d-lg-none"
        />
      </div>

      <v-spacer class="d-lg-none"></v-spacer>
      <div class="d-lg-none">
        <div class="text-center">
          <v-menu
            v-model="menu"
            :close-on-content-click="true"
            :nudge-width="500"
            offset-y
            transition="slide-y-transition"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon color="black">mdi-menu</v-icon>
              </v-btn>
            </template>

            <v-card>
              <v-list>
                <v-list-item>
                  <v-list-item-action>
                    <v-layout row wrap justify-center class="text-center">
                      <v-flex md2 xs6>
                        <v-btn
                          text
                          small
                          color="var(--v-primary-base)"
                          active-class="red"
                          >Save More on app</v-btn
                        >
                      </v-flex>
                      <v-flex md2 xs6>
                        <v-btn text small color="var(--v-primary-base)"
                          >sell on daraz</v-btn
                        >
                      </v-flex>
                      <v-flex md2 xs6>
                        <v-btn text small color="var(--v-primary-base)"
                          >track my order</v-btn
                        >
                      </v-flex>
                      <v-flex md2 xs6>
                        <v-btn text small color="var(--v-primary-base)"
                          >login</v-btn
                        >
                      </v-flex>
                      <v-flex md2 xs6>
                        <v-btn text small color="var(--v-primary-base)"
                          >Signup</v-btn
                        >
                      </v-flex>
                      <v-flex md2 xs6>
                        <v-btn text small color="var(--v-primary-base)"
                          >customer care</v-btn
                        >
                      </v-flex>
                    </v-layout>
                  </v-list-item-action>
                </v-list-item>
              </v-list>

              <v-divider></v-divider>
              <v-text-field
                solo
                v-model="searchKey"
                label="Search here..."
                type="text"
                class="pa-2"
              >
                <template v-slot:append>
                  <v-fade-transition leave-absolute>
                    <div>
                      <v-btn large color="var(--v-primary-base)" dark
                        ><v-icon>mdi-magnify</v-icon></v-btn
                      >
                    </div>
                  </v-fade-transition>
                </template>
              </v-text-field>
              <v-list>
                <v-list-item v-for="(item, index) in items" :key="index">
                  <v-list-item-title class="text-center">
                    <v-btn
                      text
                      color="#var(--v-primary-base)"
                      @click="toRoute(item.route)"
                    >
                      {{ item.title }}</v-btn
                    >
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-card>
          </v-menu>
        </div>
      </div>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    menu: "",
    searchKey: "",
    items: [
      { title: "sell on daraz", route: "/" },
      { title: "track my order", route: "/" },
      { title: "login", route: "/" },
      { title: "Signup", route: "/" },
      { title: "customer care", route: "/" },
    ],
  }),
};
</script>

<style scoped>
.heading {
  text-align: start;
  font-weight: bold;
  font-size: 2rem;
  color: #2c547c;
}
.v-input__slot {
  padding-right: 0 !important;
  margin-bottom: 0 !important;
}
.v-input__control {
  min-height: 0 !important;
}
</style>
