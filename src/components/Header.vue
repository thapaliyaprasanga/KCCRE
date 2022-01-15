<template>
  <div>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item dark class="drawer-header">
        <v-list-item-avatar>
          <v-img src="logo.png"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title
            ><strong>KC CRE Advisors</strong></v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      height="70"
      app
      color="primary"
      dark
      elevation="6"
      elevate-on-scroll
    >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>KC Cre Advisors</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-list color="primary" class="d-flex">
        <v-list-item
          link
          v-for="(item, index) in items"
          :key="index"
          :to="item.to"
        >
          <v-list-item-title> {{ item.title }} </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-app-bar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  private drawer = null;
  private items = [
    { title: "Home", icon: "mdi-home", to: "/" },
    { title: "About", icon: "mdi-information", to: "/about" },
    { title: "Products", icon: "mdi-file-pdf-box", to: "/products" },
    { title: "Freebies", icon: "mdi-freebsd", to: "/freebies" },
    { title: "Blog", icon: "mdi-post", to: "/blog" },
    { title: "Contact", icon: "mdi-account-box", to: "/contact" },
  ];
}
</script>

<style lang="scss">
.drawer-header {
  background: $primary;
  height: 70px;
}
</style>
