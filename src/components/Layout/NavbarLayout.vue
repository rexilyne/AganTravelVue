<template>
    <div>
        <v-app-bar app fixed clipped-left height="90" color="blue darken-4" elevation="4">

                    <div role="button" class="text-h5 font-weight-bold yellow--text" @click="home">
                        AganTravel.com
                    </div>
                    <v-spacer></v-spacer>

                    <v-btn class="mr-3" outlined color="white" @click="register">Register</v-btn>
                    <v-btn class="" outlined color="white" @click="login">Login</v-btn>

            <!-- <v-app-bar-title>TokoLaku.id</v-app-bar-title> -->
            <!-- <v-spacer> -->
        </v-app-bar>
        <div class="pa-5">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        methods: {
            home() {
                this.$router.push({
                    name: 'Welcome',
                });
            },

            register() {
                this.$router.push({
                    name: 'Register',
                });
            },

            login() {
                this.$router.push({
                    name: 'Login',
                });
            }
        }
    }
</script>