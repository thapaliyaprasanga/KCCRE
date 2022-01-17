<template>
  <div>
    <Hero />
    <WhatWeOffer />
    <FeaturedBlogs />
  </div>
</template>

<script lang="ts">
import Hero from "@/components/Home/Hero.vue";
import { Component, Vue } from "vue-property-decorator";
import Card from "@/components/Home/Cards.vue";
import WhatWeOffer from "@/components/Home/WhatWeOffer.vue";
import FeaturedBlogs from "@/components/Home/FeaturedBlogs.vue";
@Component({
  components: {
    Hero,
    Card,
    WhatWeOffer,
    FeaturedBlogs,
  },
})
export default class Home extends Vue {}
</script>
