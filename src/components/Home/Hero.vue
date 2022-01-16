<template>
  <v-carousel
    :height="carouselHeight"
    class="grey lighten-4 px-3"
    cycle
    hide-delimiters
    show-arrows-on-hover
  >
    <v-carousel-item v-for="(slide, i) in slides" :key="i">
      <v-sheet height="100%">
        <v-row
          class="grey lighten-4 fill-height"
          align="center"
          justify="center"
        >
          <section>
            <v-container>
              <v-row class="align-center justify-center">
                <v-col lg="6">
                  <h1>{{ slide.heroTitle }}</h1>
                  <p>
                    {{ slide.heroDescription }}
                  </p>
                  <v-btn
                    :to="slide.to"
                    color="#0c3c60"
                    class="white--text mr-10"
                    rounded
                  >
                    <v-icon>mdi-magnify</v-icon>
                    {{ slide.buttonText }}</v-btn
                  >
                </v-col>
                <v-col class="d-none d-sm-flex" lg="6">
                  <img width="100%" :src="slide.img" />
                </v-col>
              </v-row>
            </v-container>
          </section>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Hero } from "./types";
@Component
export default class extends Vue {
  private carouselHeight = 600;
  private slides: Array<Hero> = [
    {
      heroTitle: "Achieving Growth",
      heroDescription:
        "Helping Clients Achieve Growth Through Data Driven Market Research",
      buttonText: "Explore more",
      to: {
        name: "Dashboard",
      },
      img: "hero.png",
    },
    {
      heroTitle: "Products",
      heroDescription:
        "We offer everything surrounding Real Estate, Economics, Demographics and Capital Markets Data and Market Research",
      buttonText: "Explore products",
      to: {
        name: "Dashboard",
      },
      img: "hero2.png",
    },
  ];

  created(): void {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 600) {
        this.carouselHeight = 300;
      } else {
        this.carouselHeight = 600;
      }
    });
  }

  destroyed(): void {
    window.removeEventListener("resize", () => {
      return null;
    });
  }
}
</script>

<style lang="scss" scoped></style>
