<template>
  <v-col class="pa-0" md="6" cols="12">
    <v-list-item>
      <v-list-item-avatar>
        <v-img :src="item.avatar"></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="font-weight-bold">{{
          item.name
        }}</v-list-item-title>
        <p class="text-subtitle-2 font-weight-light">
          {{ item.description }}
        </p>
      </v-list-item-content>
    </v-list-item>
  </v-col>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { OurTeamsDTO } from "./types";

@Component
export default class OurTeamCard extends Vue {
  @Prop() readonly item: OurTeamsDTO;
}
</script>

<style lang="scss" scoped>
.row-wrapper {
  max-width: 900px;
  margin: auto;
}
</style>
