<template>
  <div>
    <Slogan />
    <WhoAreWe />
    <OurVision />
    <AboutSanjayKC />
    <MeetOurTeams />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Slogan from "@/components/Aboutus/Slogan.vue";
import WhoAreWe from "@/components/Aboutus/WhoAreWe.vue";
import AboutSanjayKC from "@/components/Aboutus/AboutSanjayKC.vue";
import MeetOurTeams from "@/components/Aboutus/MeetOurTeam.vue";
import OurVision from "@/components/Aboutus/OurVision.vue";

@Component({
  components: {
    Slogan,
    WhoAreWe,
    AboutSanjayKC,
    MeetOurTeams,
    OurVision,
  },
})
export default class AboutUs extends Vue {}
</script>
