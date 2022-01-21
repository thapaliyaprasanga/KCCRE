<template>
  <AnyQueries />
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import AnyQueries from "@/components/Contact/AnyQueries.vue";
@Component({
  components: {
    AnyQueries,
  },
})
export default class Contact extends Vue {}
</script>
