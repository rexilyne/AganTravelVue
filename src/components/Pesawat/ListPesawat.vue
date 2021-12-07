<template>
  <v-main class="listpesawat">
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
                  v-text="item.noPenerbangan"
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
  name: "ListPesawat",
  data() {
    return {
      snackbar: false,
      error_message: "",
      color: "",
      items: [
        {
          src: "https://asset.kompas.com/crops/3cQmGgXNtlok9hC6pB-GxIbA3b8=/0x0:0x0/750x500/data/photo/2020/10/12/5f83e110d24cb.jpeg",
          noPenerbangan: "AIR001",
          asal: "Yogyakarta",
          tujuan: "Jakarta",
          waktuBerangkat: "11.00",
          waktuTiba: "12.15",
          harga: "3000000",
        },
        {
          src: "https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/nationalgeographic/201412291640030_b.jpg",
          noPenerbangan: "AIR002",
          asal: "Bandung",
          tujuan: "Yogyakarta",
          waktuBerangkat: "15.00",
          waktuTiba: "16.00",
          harga: "2000000",
        },
      ],
    };
  },
  methods: {
    // Simpan data user
    save(item) {
      let newData = {
        noPenerbangan: item.noPenerbangan,
        asal: item.asal,
        tujuan: item.tujuan,
        waktuBerangkat: item.waktuBerangkat,
        waktuTiba: item.waktuTiba,
        harga: item.harga,
        idUser: localStorage.getItem("id"),
        jumlahPenumpang: 1,
        totalHarga: item.harga,
      };

      var url = this.$api + "/orderpesawat";
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
