<template>
  <div>
    <Hero />
    <div class="background-wrapper">
      <div class="background-color d-none d-md-block"></div>
      <v-container>
        <h1 class="text-center">What We Offer</h1>
        <v-row>
          <v-col v-for="(card, index) in cards" :key="index" md="4">
            <Card :card="card" />
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script lang="ts">
import Hero from "@/components/Home/Hero.vue";
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "../components/HelloWorld.vue";
import Card from "@/components/Home/Cards.vue";
import { CardDTO } from "@/components/Home/types";

@Component({
  components: {
    HelloWorld,
    Hero,
    Card,
  },
})
export default class Home extends Vue {
  private cards: Array<CardDTO> = [
    {
      title: "Products",
      description:
        "We offer everything surrounding Real Estate, Economics, Demographics and Capital Markets Data and Market Research",
      img: "card1.png",
    },
    {
      title: "Blogs",
      description:
        "Topics include ALL sectors of Real Estate, national and regional economics, demographics and capital markets",
      img: "card2.png",
    },
    {
      title: "Freebies",
      description:
        "Truly a Freebie. Data files, charts and written analysis. Some months, for a limited time, we will put links to data and analysis.",
      img: "card3.png",
    },
  ];
}
</script>

<style lang="scss">
.background-wrapper {
  position: relative;
  .background-color {
    position: absolute;
    background: $primary;
    top: 0;
    bottom: 0;
    width: 300px;
  }
}
</style>
