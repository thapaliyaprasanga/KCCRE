<template>
  <v-textarea
    v-model="description"
    :rules="rules"
    :label="label"
    required
    outlined
    @input="$emit(`${label}`, $event)"
  ></v-textarea>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
@Component
export default class TextArea extends Vue {
  private description = "";
  @Prop() readonly rules: Record<string, unknown>;
  @Prop() readonly label: string;
}
</script>
