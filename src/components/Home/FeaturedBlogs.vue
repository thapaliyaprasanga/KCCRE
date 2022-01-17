<template>
  <div class="grey lighten-5 py-12">
    <div class="background-wrapper">
      <div class="background-color-left d-none d-md-block"></div>
      <div class="background-color-right d-none d-md-block"></div>
      <h1 class="text-center mb-10">Featured Blogs</h1>
      <v-container>
        <div class="card-row">
          <FeaturedBlog
            v-for="(card, index) in cards"
            :key="index"
            :card="card"
          />
        </div>
      </v-container>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import FeaturedBlog from "@/components/Home/FeaturedBlog.vue";

@Component({
  components: {
    FeaturedBlog,
  },
})
export default class Home extends Vue {
  private cards = [
    {
      title: "Blog1",
      description:
        "Though the real estate field has matured, an occasional look back to confirm and validate factors that impact different.",
      img: "featured1.png",
    },
    {
      title: "Blog2",
      description:
        "We are re-visiting one popular multifamily indicator called Jobs-to-Permits Ratio, also known as Demand-Supply Ratio.",
      img: "featured2.png",
    },
    {
      title: "Blog3",
      description:
        "The analysis below explains how the simple calculation helps explain the apartment market fundamentals.",
      img: "featured3.png",
    },
    {
      title: "Blog4",
      description:
        "Though the indicator is simple to understand and plenty of evidence exists to support the strength of this indicator to",
      img: "featured4.png",
    },
  ];
}
</script>

<style lang="scss">
.card-row {
  display: grid;
  grid-template-columns: repeat(2, 330px);
  grid-gap: 20px;
  justify-content: center;
}

@media screen and(max-width: 768px) {
  .card-row {
    grid-template-columns: repeat(1, minmax(160px, 1fr));
  }
}
</style>
