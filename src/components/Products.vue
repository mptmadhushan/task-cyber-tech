<template>
  <v-container>
    <v-card pa-4>
      <v-layout row wrap pa-4 justify-space-around>
        <v-flex md2 xs6>
          <p style="color:var(--v-primary-base)">On Sale Now</p>
        </v-flex>
        <v-flex md5 xs6>
          <p>
            Ending In : <span class="time">00</span> :
            <span class="time">21</span> : <span class=" time">43</span>
          </p>
        </v-flex>
        <v-spacer class="d-none d-lg-block "></v-spacer>
        <v-flex md4 xs6 class="text-end">
          <v-btn pa-4 outlined color="var(--v-primary-base)">shop more</v-btn>
        </v-flex>
      </v-layout>
      <v-divider></v-divider>
      <v-layout row wrap>
        <v-flex pa-3 md3 v-for="product in products" :key="product.id">
          <v-card class="mx-auto" max-width="100%">
            <v-img :src="product.src" height="100%"></v-img>

            <p class="pro_title">
              {{ product.title | truncate(40, "...") }}
            </p>

            <p>
              <span class="price_dis"> Rs.{{ product.price }}</span
              ><br />
              <span class="price_nor">Rs.{{ product.price2 }} </span
              ><span class="price_dis_pre">-{{ product.dis }}%</span>
            </p>
          </v-card>
        </v-flex>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    products: [
      {
        title:
          "Wiresto True Wireless Earbuds Mini Bluetooth Earphone Stereo Headphone",
        src:
          "https://static-01.daraz.lk/p/0e1aff0ca9660e60a69412d8a61435ee.jpg_400x400q75.jpg_.webp",
        price: 1223,
        price2: 12332,
        dis: 30,
      },
      {
        title: "Electric Mosquito Killer Night Lamp Insect ",
        src:
          "https://static-01.daraz.lk/p/d17a13496f99747e2208b011b9bbf7dd.jpg",
        price: 2122,
        price2: 1233,
        dis: 23,
      },
      {
        title: "Personal Small Electric Juice Mixer Blender Machine",
        src:
          "https://static-01.daraz.lk/p/ff2dddecad1e7ab76f0e46372f6b7a9f.jpg_400x400q75.jpg_.webp",
        price: 3234,
        price2: 3453,
        dis: 43,
      },
      {
        title:
          "PYoga Mat Exercise Mat 2  Gym Workout Mat with Free Carry Bag - Clever Pro Mat",
        src:
          "https://static-01.daraz.lk/p/393bf3fe56ac2630eb94873003749f2a.jpg_400x400q75.jpg_.webp",
        price: 1190,
        price2: 1222,
        dis: 34,
      },
    ],
  }),
};
</script>

<style>
.time {
  background-color: var(--v-primary-base);
  padding: 2%;
}
.pro_title {
  padding: 6px;
}
.price_dis {
  color: var(--v-primary-base);
  padding-left: 6px;
  font-size: 1.5rem;
}
.price_nor {
  color: #727171;
  padding-left: 6px;
  font-size: 1rem;
  text-decoration: line-through;
}
.price_dis_pre {
  color: #727171;
  padding-left: 6px;
  font-size: 0.9rem;
}
</style>
