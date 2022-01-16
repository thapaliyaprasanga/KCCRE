<template>
  <v-footer dark padless>
    <v-card flat tile class="primary white--text text-center">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        At KC CRE Advisors we are committed to providing our clients with
        powerful insights to succeed. Our advisers provide deep understanding of
        Real Estate market where our clients can confidently make the successful
        deals. Our data analytics team provide actionable forecasts and analysis
        of economics, demographics and capital markets to support ANY type of
        business.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>KC CRE Advisors</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Footer extends Vue {
  private icons: Array<string> = [
    "mdi-facebook",
    "mdi-twitter",
    "mdi-linkedin",
    "mdi-instagram",
  ];
}
</script>

<style></style>
