<template>
  <v-main>
    <v-container fluid fill-height class="">
      <v-layout flex align-center justify-center>
        <v-flex xs12 sm6 elevation-6>
          <v-card>
            <v-card-title class="justify-center font-weight-bold text-h6"
              >Selamat datang di AganTravel</v-card-title
            >
            <v-card-text class="pt-4">
              <v-form v-model="valid" ref="form">
                <v-text-field
                  label="E-mail"
                  v-model="email"
                  :rules="emailRules"
                  required
                ></v-text-field>
                <v-text-field
                  label="Password"
                  v-model="password"
                  type="password"
                  :rules="passwordRules"
                  required
                ></v-text-field>
                <v-layout justify-center class="mt-4">
                  <v-btn block class="blue darken-1 white--text" @click="submit"
                    >Login</v-btn
                  >
                </v-layout>
                <v-layout justify-center class="mt-2">
                  <div class="caption">
                    Belum punya akun?
                    <a
                      href="/authentication/register"
                      class="text-decoration-none"
                      >Register</a
                    >
                  </div>
                </v-layout>
              </v-form>
            </v-card-text>
          </v-card>
          <v-snackbar v-model="snackbar" :color="color" timeout="2000" bottom>{{
            error_message
          }}</v-snackbar>
        </v-flex>
      </v-layout>
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      load: false,
      snackbar: false,
      error_message: "",
      color: "",
      valid: false,
      password: "",
      passwordRules: [(v) => !!v || "Required"],
      email: "",
      emailRules: [(v) => !!v || "Required"],
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // cek validasi data yang terkirim
        this.load = true;
        this.$http
          .post(this.$api + "/login", {
            email: this.email,
            password: this.password,
          })
          .then((response) => {
            // simpan data id user yang diinput
            localStorage.setItem("id", response.data.user.id);
            localStorage.setItem("token", response.data.access_token);
            this.error_message = response.data.message;
            this.color = "green";
            this.snackbar = true;
            this.load = false;
            this.clear();
            this.$router.push({
              name: "Home",
            });
          })
          .catch((error) => {
            this.error_message = error.response.data.message;
            this.color = "red";
            this.snackbar = true;
            localStorage.removeItem("token");
            this.load = false;
          });
      }
    },
    clear() {
      this.$refs.form.reset();
    },
    register() {
      this.$router.push({
        name: "Register",
      });
    },
  },
};
</script>
