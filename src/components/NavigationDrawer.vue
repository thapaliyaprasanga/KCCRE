<template>
  <v-navigation-drawer
    @transitionend="$emit('toggleDrawer')"
    :value="true"
    absolute
    temporary
  >
    <v-list-item dark class="drawer-header">
      <v-list-item-avatar>
        <v-img src="logo.png"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title><strong>KC CRE Advisors</strong></v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense>
      <v-list-item v-for="item in pages" :key="item.title" link :to="item.to">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <span v-if="authenticated">
        <v-list-item
          v-for="item in authPages"
          :key="item.title"
          link
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </span>
      <span v-if="!authenticated">
        <v-list-item
          v-for="item in notAuthPages"
          :key="item.title"
          link
          :to="item.to"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </span>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { namespace } from "vuex-class";
const auth = namespace("auth");
@Component
export default class NavigationDrawer extends Vue {
  @auth.State
  private token: string;
  @auth.Getter
  private authenticated: boolean;

  private pages = [
    { title: "Home", icon: "mdi-home", to: "/" },
    { title: "About", icon: "mdi-information", to: "/about" },
    { title: "Products", icon: "mdi-file-pdf-box", to: "/products" },
    { title: "Freebies", icon: "mdi-freebsd", to: "/freebies" },
    { title: "Blog", icon: "mdi-post", to: "/blog" },
    { title: "Contact", icon: "mdi-account-box", to: "/contact" },
  ];

  private notAuthPages = [
    { title: "Signup", icon: "mdi-account-plus", to: "/signup" },
    { title: "Signin", icon: "mdi-login", to: "/signin" },
  ];
  private authPages = [
    {
      title: "Signout",
      icon: "mdi-logout",
      to: "#",
    },
  ];
}
</script>

<style lang="scss">
.drawer-header {
  background: $primary;
  height: 70px;
}
</style>
