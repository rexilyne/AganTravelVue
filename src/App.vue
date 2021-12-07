<template>
  <v-app style="
    background: -webkit-linear-gradient(to right, #42A5F5, #64B5F6, #90CAF9);
    background: linear-gradient(to right, #42A5F5, #64B5F6, #90CAF9);
  ">
    <router-view></router-view>
  </v-app>
</template>

<script>
export default {
  name: "App",
}
</script>