<template>
  <div>
    <NavigationDrawer @toggleDrawer="drawer = false" v-if="drawer" />
    <AppBar
      @toggleDrawer="drawer = true"
      :authPages="authPages"
      :notAuthPages="notAuthPages"
      :pages="pages"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import NavigationDrawer from "./NavigationDrawer.vue";
import AppBar from "./AppBar.vue";
@Component({
  components: {
    NavigationDrawer,
    AppBar,
  },
})
export default class Header extends Vue {
  private drawer = null;
  private pages = [
    { title: "Home", icon: "mdi-home", to: "/" },
    { title: "About", icon: "mdi-information", to: "/about" },
    { title: "Products", icon: "mdi-file-pdf-box", to: "/products" },
    { title: "Freebies", icon: "mdi-freebsd", to: "/freebies" },
    { title: "Blog", icon: "mdi-post", to: "/blog" },
    { title: "Contact", icon: "mdi-account-box", to: "/contact" },
  ];

  private notAuthPages = [
    { title: "Signup", icon: "mdi-account-box", to: "/signup" },
    { title: "Signin", icon: "mdi-account-box", to: "/signin" },
  ];
  private authPages = [
    {
      title: "Signout",
      icon: "mdi-account-box",
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
