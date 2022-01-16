<template>
  <Hero />
</template>

<script lang="ts">
import Hero from "@/components/Home/Hero.vue";
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "../components/HelloWorld.vue";

@Component({
  components: {
    HelloWorld,
    Hero,
  },
})
export default class Home extends Vue {}
</script>
