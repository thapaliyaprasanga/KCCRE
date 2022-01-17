<template>
  <BlogCards />
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import BlogCards from "@/components/Blog/BlogCards.vue";

@Component({
  components: {
    BlogCards,
  },
})
export default class Blog extends Vue {}
</script>

<style></style>
