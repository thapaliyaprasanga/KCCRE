<template>
  <div class="box my-5 pa-3">
    <v-row>
      <v-col cols="12" md="5">
        <img :src="blog.img" />
      </v-col>
      <v-col cols="12" md="7">
        <v-list subheader two-line>
          <v-list-item>
            <v-list-item-avatar>
              <v-img :src="blog.avatar"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ blog.name }}</v-list-item-title>

              <v-list-item-subtitle> {{ blog.date }} </v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn icon>
                <v-icon color="grey lighten-1">mdi-information</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list>
        <p class="blog-title">
          {{ blog.title }}
        </p>
        <p class="blog-description">
          {{ blog.description }}
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import { BlogDTO } from "./types";
@Component
export default class BlogCard extends Vue {
  @Prop() readonly blog: BlogDTO;
}
</script>

<style lang="scss">
.box {
  overflow: hidden;
  max-width: 900px;
  margin: auto;

  img {
    width: 100%;
    height: 100%;
    max-height: 400px;
    background-size: cover;
    background-position: center;
  }
  .blog-title {
    font-size: 30px;
    color: $primary;
  }
  .blog-description {
    font-size: 17px;
    color: $primary;
  }
}
</style>
