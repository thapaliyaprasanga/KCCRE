<template>
  <div>
    <Slogan />
    <WhoAreWe />
    <AboutSanjayKC />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Slogan from "@/components/Aboutus/Slogan.vue";
import WhoAreWe from "@/components/Aboutus/WhoAreWe.vue";
import AboutSanjayKC from "@/components/Aboutus/AboutSanjayKC.vue";

@Component({
  components: {
    Slogan,
    WhoAreWe,
    AboutSanjayKC,
  },
})
export default class AboutUs extends Vue {}
</script>
