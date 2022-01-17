<template>
  <v-card class="mx-auto my-4" max-width="374">
    <v-img height="150" :src="card.img"></v-img>

    <v-card-title class="justify-center">{{ card.title }}</v-card-title>

    <v-card-text class="text-center">
      <div>
        {{ card.description }}
      </div>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { CardDTO } from "./types";
@Component
export default class extends Vue {
  @Prop() readonly card: CardDTO;
}
</script>

<style lang="scss" scoped>
.v-card {
  &:hover {
    transition: 500ms ease-in-out;
    transform: scale(1.04);
  }
}
</style>
