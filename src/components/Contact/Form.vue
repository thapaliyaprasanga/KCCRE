<template>
  <div class="py-16">
    <v-container class="contact-form">
      <div class="text-center mb-3 text-h4"><strong>Contact Us</strong></div>
      <div class="text-center mb-3 grey--text subtitle-2">
        Describe your concerns briefly
      </div>
      <v-form ref="form" v-model="valid" lazy-validation>
        <TextField
          @E-mail="email = $event"
          :rules="emailRules"
          label="E-mail"
        />
        <TextArea
          @Description="description = $event"
          :rules="descriptionRules"
          label="Description"
        />

        <div class="d-flex align-center">
          <v-btn
            :disabled="!valid"
            color="primary"
            class="mr-4"
            @click="submit"
          >
            Submit
          </v-btn>
          <p class="primary--text mb-0"> Or e-mail us: kccre@advisors.com</p>
        </div>
      </v-form>
    </v-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import TextField from "@/components/TextField.vue";
import TextArea from "@/components/TextArea.vue";

@Component({
  components: {
    TextField,
    TextArea,
  },
})
export default class ContactForm extends Vue {
  private valid = true;
  email = "";
  private emailRules = [
    (v: string) => !!v || "E-mail is required",
    (v: string) => /.+@.+\..+/.test(v) || "E-mail must be valid",
  ];
  private description = "";
  private descriptionRules = [
    (v: string) => !!v || "Description is required",
    (v: string) =>
      v.length >= 20 || "Description must have atleast 20 characters",
  ];

  submit(): void {
    const valid = (
      this.$refs.form as Vue & { validate: () => boolean }
    ).validate();

    if (valid && this.email && this.description) {
      console.log("Submitted");
    } else {
      console.log("Not submitted");
    }
  }
}
</script>

<style lang="scss">
.contact-form {
  @include reset-form;
}
</style>
