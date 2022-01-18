<template>
  <div class="grey lighten-4">
    <v-container>
      <h1 class="text-center primary--text my-10">Sanjay KC</h1>
      <v-row>
        <v-col cols="12" md="6">
          <v-card
            class="about-sanjay-description font-weight-light pa-10 d-flex align-center"
            elevation="2"
          >
            KC Sanjay, Founder and President of KC CRE Advisors, brings over 20
            years of real estate market research experience. Before forming his
            own company, he lead Axiometrics, a RealPage Company's on-site
            economists and analysts in using in depth apartment market and
            student housing research to solve real-world challenges. KC was a
            research analyst for Invesco Ltd., where he was involved with
            commercial real estate market research to assist in that company’s
            acquisition and disposition strategies. He also served as senior
            economic and real estate analyst with Guaranty Bank/BBVA Compass.
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card elevation="2" class="d-flex flex-column justify-center">
            <div class="d-flex flex-column align-center pa-4">
              <v-img
                class="rounded-circle"
                width="125"
                src="kcavatar.jpg"
              ></v-img>
              <v-card-text>
                <v-timeline align-top dense>
                  <v-timeline-item
                    v-for="(detail, index) in details"
                    :key="index"
                    :color="detail.color"
                    small
                  >
                    <div>
                      <div class="font-weight-normal">
                        <strong>{{ detail.title }}</strong>
                      </div>
                      <div>{{ detail.description }}</div>
                    </div>
                  </v-timeline-item>
                </v-timeline>
              </v-card-text>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class AboutSanjayKC extends Vue {
  private details = [
    {
      title: "Designation",
      description: "Founder and CEO",
    },
    {
      title: "Education",
      description: "Master, University of Texas at Arlington",
    },
    {
      title: "Worked",
      description:
        "Research analyst for Invesco Ltd. | Senior economic and real estate analyst with Guaranty Bank/BBVA Compass.",
    },
  ];
}
</script>

<style lang="scss" scoped>
.about-sanjay-description {
  font-size: 20px !important;
  text-align: center;
}
.v-card {
  height: 500px;
}

@media screen and(max-width: 959.99px) {
  .v-card {
    height: initial;
  }
}
</style>
