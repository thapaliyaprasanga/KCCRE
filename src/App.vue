<template>
  <v-app>
    <Header />
    <v-main>
      <router-view />
      <Snackbar />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/Header.vue";
import Snackbar from "@/components/Snackbar.vue";

@Component({
  components: {
    Header,
    Snackbar,
  },
})
export default class App extends Vue {}
</script>
