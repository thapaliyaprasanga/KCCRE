<template>
  <div class="auth-form-wrapper pa-3">
    <div class="text-center mb-3 text-h4"><strong>Create Account</strong></div>
    <div class="text-center mb-3 grey--text subtitle-2">
      Create account and we'll help you to make best deals through our market
      research.
    </div>
    <v-form ref="form" v-model="valid" lazy-validation>
      <TextField @Name="name = $event" :rules="nameRules" label="Name" />
      <TextField @E-mail="email = $event" :rules="emailRules" label="E-mail" />
      <TextField
        @Password="password = $event"
        :rules="passwordRules"
        label="Password"
      />

      <div class="d-flex">
        <v-btn :disabled="!valid" color="primary" class="mr-4" @click="submit">
          Signup
        </v-btn>
        <v-list-item to="/signin" class="grey--text"
          >Already have an account?</v-list-item
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
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
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
