<template>
  <v-main class="listbus">
    <v-container>
      <v-row dense>
        <!-- <v-col cols="12">
          <v-card color="#385F73" dark>
            <v-card-title class="text-h5"> Unlimited music now </v-card-title>

            <v-card-subtitle
              >Listen to your favorite asals and albums whenever and wherever,
              online and offline.</v-card-subtitle
            >

            <v-card-actions>
              <v-btn text> Listen Now </v-btn>
            </v-card-actions>
          </v-card>
        </v-col> -->

        <v-col v-for="(item, i) in items" :key="i" cols="12">
          <v-card>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="text-h5"
                  v-text="item.noBus"
                ></v-card-title>

                <v-card-subtitle
                  >{{ item.asal }} - {{ item.tujuan }}</v-card-subtitle
                >
                <v-card-text
                  >{{ item.waktuBerangkat }} - {{ item.waktuTiba }}</v-card-text
                >
                <v-card-text>Rp {{ item.harga }}</v-card-text>
                <v-card-actions>
                  <v-btn
                    class="ml-2 mt-5"
                    outlined
                    rounded
                    small
                    @click="save(item)"
                  >
                    Pesan Tiket
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar class="ma-3" size="125" tile>
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-snackbar v-model="snackbar" :color="color" timeout="2000" bottom>{{
      error_message
    }}</v-snackbar>
  </v-main>
</template>

<script>
export default {
  name: "ListBus",
  data() {
    return {
      snackbar: false,
      error_message: "",
      color: "",
      items: [
        {
          src: "https://awsimages.detik.net.id/community/media/visual/2020/11/22/bus-tingkat-bodi-avante-d2-buatan-karoseri-tentrem.jpeg?w=700&q=90",
          noBus: "BUS001",
          asal: "Yogyakarta",
          tujuan: "Jakarta",
          waktuBerangkat: "06.00",
          waktuTiba: "23.00",
          harga: "2000000",
        },
        {
          src: "https://asset.kompas.com/crops/2k3dxMKANXJfKkNCfxq-LhOWx24=/84x56:1080x720/750x500/data/photo/2020/07/01/5efc1607d7ad4.jpg",
          noBus: "BUS002",
          asal: "Solo",
          tujuan: "Surabaya",
          waktuBerangkat: "03.00",
          waktuTiba: "22.00",
          harga: "3500000",
        },
      ],
    };
  },
  methods: {
    // Simpan data user
    save(item) {
      let newData = {
        noBus: item.noBus,
        asal: item.asal,
        tujuan: item.tujuan,
        waktuBerangkat: item.waktuBerangkat,
        waktuTiba: item.waktuTiba,
        harga: item.harga,
        idUser: localStorage.getItem("id"),
        jumlahPenumpang: 1,
        totalHarga: item.harga,
      };

      var url = this.$api + "/orderbus";
      this.$http
        .post(url, newData, {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        })
        .then((response) => {
          this.error_message = response.data.message;
          this.color = "green";
          this.snackbar = true;
          this.load = true;
        })
        .catch((error) => {
          this.error_message = error.response.data.message;
          this.color = "red";
          this.snackbar = true;
          this.load = false;
        });
    },
  },
};
</script>
