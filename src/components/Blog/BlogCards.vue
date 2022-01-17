<template>
  <div class="px-3">
    <BlogCard v-for="(blog, index) in blogs" :key="index" :blog="blog" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import BlogCard from "@/components/Blog/BlogCard.vue";
import { BlogDTO } from "./types";

@Component({
  components: {
    BlogCard,
  },
})
export default class BlogCards extends Vue {
  private blogs: Array<BlogDTO> = [
    {
      name: "Prasanga Thapaliya",
      date: "Jan 20, 2022",
      title:
        "Bay Area, CA Apartment Market: Gear Up for Outsized Growth after Pandemic",
      description:
        "The chart above shows the bay Area markets apartment fundamentals and drivers. This is the combined area of San Fransisco, Oakland, and combined area of Dallas.",
      img: "featured2.png",
      avatar: "avatar.jpg",
    },
    {
      name: "Prasanga Thapaliya",
      date: "Jan 20, 2022",
      title:
        "Wage and Income Growth: Four Different Sources, Six Different Data/Trend",
      description:
        "Recently released data from the Census revealed that in 2019 household income grew by 6.8% to reach $68,703--highest ever since the Census reach since the Census.",
      img: "featured3.png",
      avatar: "avatar.jpg",
    },
  ];
}
</script>
