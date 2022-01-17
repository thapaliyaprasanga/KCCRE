<template>
  <div class="card-col scale-on-hover" cols="6">
    <v-card class="mx-auto" max-width="374">
      <v-img height="250" :src="card.img"></v-img>

      <v-card-title>{{ card.title }}</v-card-title>

      <v-card-text>
        <div>
          {{ card.description }}
        </div>
      </v-card-text>

      <v-divider class="mx-4"></v-divider>

      <v-card-actions class="justify-center">
        <v-btn color="primary" text> More </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { FeaturedBlogDTO } from "@/components/Home/types";

@Component
export default class FeaturedBlog extends Vue {
  @Prop() readonly card: FeaturedBlogDTO;
}
</script>
