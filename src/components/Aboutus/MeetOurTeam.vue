<template>
  <v-container class="my-16 py-16">
    <h2 class="primary--text text-center mb-10">Our Team</h2>
    <v-row>
      <OurTeamCard v-for="(item, index) in items" :key="index" :item="item" />
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { OurTeamsDTO } from "@/components/Aboutus/types";
import OurTeamCard from "@/components/Aboutus/OurTeamCard.vue";

@Component({
  components: {
    OurTeamCard,
  },
})
export default class MeetOurTeams extends Vue {
  private items: Array<OurTeamsDTO> = [
    {
      avatar: "kcavatar.jpg",
      name: "Sanjay KC",
      description: `Founder and CEO, Fabien is the driving force behind Odoo. He loves to keep his hands full by participating in the development of the software, marketing, and the Customer Experience strategies.`,
    },
    {
      avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
      name: "Kushal Ghising",
      description: "Kushal Ghising is a designer.",
    },
    {
      avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
      name: "Prasanga Thapaliya",
      description: "He is a Full Stack developer.",
    },
    {
      avatar: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
      name: "Abinash Rana",
      description:
        "Rana is a front end developer from Syanja. He is living in adf",
    },
  ];
}
</script>
