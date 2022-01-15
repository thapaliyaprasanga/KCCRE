<template>
  <div class="wrapper pa-3">
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

<script>
import TextField from "@/components/TextField.vue";
export default {
  components: {
    TextField,
  },
  data: () => ({
    valid: true,
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    password: "",
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => v.length >= 8 || "Password must have atleast 8 characters",
    ],
  }),

  methods: {
    submit() {
      const valid = this.$refs.form.validate();
    },
  },
};
</script>

<style lang="scss">
.wrapper {
  max-width: 400px;
  margin: auto;
  border: 1px solid #ddd;
  margin-top: 100px;
}
</style>
