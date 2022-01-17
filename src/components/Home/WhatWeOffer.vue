<template>
  <div class="background-wrapper my-10">
    <div class="background-color-left d-none d-md-block"></div>
    <v-container>
      <h1 class="text-center mb-10">What We Offer</h1>
      <v-row>
        <v-col v-for="(card, index) in cards" :key="index" md="4">
          <Card :card="card" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Card from "@/components/Home/Cards.vue";
import { CardDTO } from "@/components/Home/types";

@Component({
  components: {
    Card,
  },
})
export default class WhatWeOffer extends Vue {
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
