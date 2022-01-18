<template>
  <div>
    <Slogan />
    <WhoAreWe />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Slogan from "@/components/Aboutus/Slogan.vue";
import WhoAreWe from "@/components/Aboutus/WhoAreWe.vue";

@Component({
  components: {
    Slogan,
    WhoAreWe,
  },
})
export default class AboutUs extends Vue {}
</script>
