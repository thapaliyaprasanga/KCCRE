<template>
  <v-text-field
    v-model="name"
    :rules="rules"
    :label="label"
    required
    outlined
    @input="$emit(`${label}`, $event)"
  ></v-text-field>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class extends Vue {
  private name = "";

  @Prop() readonly rules: Record<string, unknown>;
  @Prop() readonly label: Record<string, unknown>;
}
</script>

<style lang="scss"></style>
