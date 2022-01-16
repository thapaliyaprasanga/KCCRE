<template>
  <div class="auth-form-wrapper pa-3">
    <div class="text-center mb-3 text-h4"><strong>Login</strong></div>
    <div class="text-center mb-3 grey--text subtitle-2">
      Login and we'll guide you to make your best deals.
    </div>
    <v-form ref="form" v-model="valid" lazy-validation>
      <TextField @E-mail="email = $event" :rules="emailRules" label="E-mail" />
      <TextField
        @Password="password = $event"
        :rules="passwordRules"
        label="Password"
      />

      <div class="d-flex">
        <v-btn :disabled="!valid" color="primary" class="mr-4" @click="submit">
          Login
        </v-btn>
        <v-list-item to="/signup" class="grey--text"
          >Don't have an account?</v-list-item
        >
      </div>
    </v-form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TextField from "@/components/TextField.vue";
import { SigninData } from "./types";
import { RootMutations } from "@/store";
import { AuthMutations } from "@/store/modules/auth/mutations";

export default Vue.extend({
  components: {
    TextField,
  },
  data: (): SigninData => ({
    valid: true,
    email: "",
    emailRules: [
      (v: string) => !!v || "E-mail is required",
      (v: string) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    password: "",
    passwordRules: [
      (v: string) => !!v || "Password is required",
      (v: string) => v.length >= 8 || "Password must have atleast 8 characters",
    ],
  }),

  methods: {
    submit(): void {
      const valid = (
        this.$refs.form as Vue & { validate: () => boolean }
      ).validate();
      if (valid && this.email && this.password) {
        const credentials = {
          email: this.email,
          password: this.password,
        };
        this.$store
          .dispatch("auth/login", credentials)
          .then((response) => {
            console.log(response);
          })
          .catch(() => {
            this.$store.commit(`auth/${AuthMutations.SET_TOKEN}`, null);
            this.$store.commit(`auth/${AuthMutations.SET_USER}`, null);
            this.$store.commit(
              RootMutations.SHOW_SNACKBAR,
              "E-mail or password isn't correct"
            );
          });
      }
    },
  },
});
</script>
