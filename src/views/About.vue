<template>
  <div>
    <Slogan />
    <WhoAreWe />
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

@Component({
  components: {
    Slogan,
    WhoAreWe,
    AboutSanjayKC,
    MeetOurTeams,
  },
})
export default class AboutUs extends Vue {}
</script>
