<template>
    <div>
        <v-toolbar app fixed height="90" class="blue darken-4">
            <v-row>
                <v-col md="3" class="text-h4 font-weight-bold yellow--text">
                    <div role="button" @click="home">
                        AganTravel.com
                    </div>
                </v-col>
                <v-col md="1">
                    <div role="button" class="text-h6 mt-1 white--text" @click="bus">
                        Bus
                    </div>
                </v-col >
                <v-col md="1">
                    <div role="button" class="text-h6 mt-1 white--text" @click="kereta">
                        Kereta
                    </div>
                </v-col>
                <v-col md="1">
                    <div role="button" class="text-h6 mt-1 white--text" @click="pesawat">
                        Pesawat
                    </div>
                </v-col>
                <v-col md="6 text-right">
                    <v-btn class="mt-1 mr-2" outlined color="white" @click="register">Register</v-btn>
                    <v-btn class="mt-1" outlined color="white" @click="login">Login</v-btn>
                </v-col>
            </v-row>
            <!-- <v-app-bar-title>TokoLaku.id</v-app-bar-title> -->
            <!-- <v-spacer> -->
        </v-toolbar>
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
                    name: 'Home',
                });
            },

            bus() {
                this.$router.push({
                    name: 'List Bus',
                });
            },

            kereta() {
                this.$router.push({
                    name: 'List Kereta',
                });
            },

            pesawat() {
                this.$router.push({
                    name: 'List Pesawat',
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