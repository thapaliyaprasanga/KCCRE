<template>
  <div>
    <AnyQueries />
    <ContactForm />
  </div>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import AnyQueries from "@/components/Contact/AnyQueries.vue";
import ContactForm from "@/components/Contact/Form.vue";

@Component({
  components: {
    AnyQueries,
    ContactForm,
  },
})
export default class Contact extends Vue {}
</script>
