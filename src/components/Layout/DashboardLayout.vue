<template>
    <div>
        <v-app-bar app fixed clipped-left height="90" color="blue darken-4" elevation="4">
            <v-row>
                <v-app-bar-nav-icon class="mt-1 ml-3" color="white" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
                <v-col md="2">
                    <div role="button" class="text-h5 font-weight-bold yellow--text ml-1" @click="home">
                        AganTravel.com
                    </div>
                </v-col>
                <v-col md="1">
                    <div role="button" class="text-h6 white--text ml-6" @click="bus">
                        Bus
                    </div>
                </v-col >
                <v-col md="1">
                    <div role="button" class="text-h6 white--text ml-2" @click="kereta">
                        Kereta
                    </div>
                </v-col>
                <v-col md="1">
                    <div role="button" class="text-h6 white--text ml-2" @click="pesawat">
                        Pesawat
                    </div>
                </v-col>
                <v-col md="6 text-right">
                    <v-icon role="button" color="white" @click="logout">mdi-logout</v-icon>
                </v-col>
            </v-row>
            <!-- <v-app-bar-title>TokoLaku.id</v-app-bar-title> -->
            <!-- <v-spacer> -->
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" app clipped>
            <v-list dense nav>
                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    link
                    tag="router-link"
                    :to="item.to"
                >
                    <v-list-item-content>
                        <v-list-item-title> {{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
        <div class="pa-5">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
        return {
                drawer: true,
                items: [

                    { title: "Profile", to: "/user/profile" },
                    { title: "Order Bus", to: "/user/orderbus" },
                    { title: "Order Kereta", to: "/user/orderkereta" },
                    { title: "Order Pesawat", to: "/user/orderpesawat" },
                ],
            };
        },
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

            logout() {
                this.$http.post(this.$api + '/logout');
                this.$router.push({
                    name: 'Welcome',
                });
             }
        }
    }
</script>