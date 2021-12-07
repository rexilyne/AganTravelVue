<template>
    <v-main class="orderkereta">
        <v-card>
            <v-card-title class="text-h5 justify-center font-weight-bold">Order Kereta</v-card-title>
            <v-card-title>
                <v-text-field
                    v-model="search"
                    append-icon="mdi-magnify"
                    label="Search"
                    single-line
                    hide-details
                >
                </v-text-field>
            </v-card-title>
            <v-data-table :headers="headers" :items="orderKeretaArray" :search="search" :loading="load" overflow-auto>
                <template v-slot:[`item.actions`]="{ item }">
                    <v-icon aria-label="update" role="button" aria-hidden="false" color="green" small class="mr-2" @click="editHandler(item); disableField = true;">
                        mdi-pencil
                    </v-icon>
                    <v-icon aria-label="delete" role="button" aria-hidden="false" color="red" small @click="deleteHandler(item.id)">
                        mdi-delete
                    </v-icon>
                </template>
            </v-data-table>
        </v-card>
        <v-dialog v-model="dialog" persistent max-width="600px">
            <v-card>
                <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                </v-card-title>
                <v-card-text>
                    <v-container>
                        <v-text-field v-model="form.noKereta" label="No Kereta" :disabled="disableField"></v-text-field>
                        <v-text-field v-model="form.asal" label="Asal" :disabled="disableField"></v-text-field>
                        <v-text-field v-model="form.tujuan" label="Tujuan" :disabled="disableField"></v-text-field>
                        <v-text-field v-model="form.waktuBerangkat" label="Waktu Berangkat" :disabled="disableField"></v-text-field>
                        <v-text-field v-model="form.waktuTiba" label="Waktu Tiba" :disabled="disableField"></v-text-field>
                        <v-text-field v-model="form.harga" label="Harga" :disabled="disableField"></v-text-field>
                        <v-text-field v-model="form.jumlahPenumpang" label="Jumlah Penumpang"></v-text-field>
                        <v-text-field v-model="form.totalHarga" label="Total Harga" :disabled="disableField"></v-text-field>
                    </v-container>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue darken-1" text @click="cancel">Cancel</v-btn>
                        <v-btn color="blue darken-1" text @click="setForm">Save</v-btn>
                    </v-card-actions>
                </v-card-text>
            </v-card>
        </v-dialog>
        <v-dialog v-model="dialogConfirm" persistent max-width="400px">
            <v-card>
                <v-card-title>
                    <span class="headline">Warning!</span>
                </v-card-title>
                <v-card-text>
                    Anda yakin ingin menghapus order bus ini?
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialogConfirm = false">Cancel</v-btn>
                    <v-btn color="blue darken-1" text @click="deleteData">Delete</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-snackbar v-model="snackbar" :color="color" timeout="2000" bottom>{{ error_message }}</v-snackbar>
    </v-main>
</template>

<script>
    export default {
       name: "OrderKereta",
       data() {
           return {
               inputType: 'Tambah',
               load: false,
               snackbar: false,
               error_message: '',
               color: '',
               search: null,
               dialog: false,
               dialogConfirm: false,
               disableField: false,
               headers: [
                   { 
                       text: "No Kereta",
                       align: "start",
                       sortable: true,
                       value: "noKereta"
                   },
                   {
                       text: "Asal",
                       value: "asal"
                   },
                   {
                       text: "Tujuan",
                       value: "tujuan",
                   },
                   {
                       text: "Waktu Berangkat",
                       value: 'waktuBerangkat'
                   },
                   {
                       text: "Waktu Tiba",
                       value: 'waktuTiba'
                   },
                   {
                       text: "Harga",
                       value: 'harga'
                   },
                   {
                       text: "Jumlah Penumpang",
                       value: 'jumlahPenumpang'
                   },
                   {
                       text: "Total Harga",
                       value: 'totalHarga'
                   },
                   {
                       text: "Actions",
                       value: 'actions'
                   },
               ],
               orderkereta: new FormData,
               orderKeretaArray: [],
               form: {
                   noKereta: null,
                   asal: null,
                   tujuan: null,
                   waktuBerangkat: null,
                   waktuTiba: null,
                   harga: null,
                   jumlahPenumpang: null,
                   totalHarga: null
               },
               deleteId: '',
               editId: ''
           }
       },
       methods: {
           setForm() {
               if(this.inputType !== 'Tambah') {
                   this.update();
               } else {
                   this.save();
               }
           },
           // Read Data orderKeretaArray
           readData() {
               var url = this.$api + '/orderkereta';
               this.$http.get(url, {
                   headers: {
                       'Authorization' : 'Bearer ' + localStorage.getItem('token')
                   }
               }).then(response => {
                   this.orderKeretaArray = response.data.data;
                   this.load = false;
               })
           },
           // Simpan data orderkereta
           save() {
               this.orderkereta.append('noKereta', this.form.noKereta);
               this.orderkereta.append('asal', this.form.asal);
               this.orderkereta.append('tujuan', this.form.tujuan);
               this.orderkereta.append('waktuBerangkat', this.form.waktuBerangkat);
               this.orderkereta.append('waktuTiba', this.form.waktuTiba);
               this.orderkereta.append('harga', this.form.harga);
               this.orderkereta.append('idUser', localStorage.getItem('id'));
               this.orderkereta.append('jumlahPenumpang', this.form.jumlahPenumpang);
               this.orderkereta.append('totalHarga', this.form.totalHarga);

               var url = this.$api + '/orderkereta'
               this.load = true;
               this.$http.post(url, this.orderkereta, {
                   headers: {
                       'Authorization' : 'Bearer ' + localStorage.getItem('token')
                   }
               }).then(response => {
                   this.error_message = response.data.message;
                   this.color = "green";
                   this.snackbar = true;
                   this.load = true;
                   this.close();
                   this.readData();
                   this.resetForm();
               }).catch(error => {
                   this.error_message = error.response.data.message;
                   this.color = "red";
                   this.snackbar = true;
                   this.load = false;
               })
           },
           // Ubah data orderkereta
           update() {
               let newData = {
                   noKereta : this.form.noKereta,
                   asal : this.form.asal,
                   tujuan : this.form.tujuan,
                   waktuBerangkat : this.form.waktuBerangkat,
                   waktuTiba : this.form.waktuTiba,
                   harga : this.form.harga,
                   idUser : localStorage.getItem('id'),
                   jumlahPenumpang : this.form.jumlahPenumpang,
                   totalHarga : this.form.harga * this.form.jumlahPenumpang
               };
               var url = this.$api + '/orderkereta/' + this.editId;
               this.load = true;
               this.$http.put(url, newData, {
                   headers: {
                       'Authorization' : 'Bearer ' + localStorage.getItem('token')
                   }
               }).then(response => {
                   this.error_message = response.data.message;
                   this.color = "green";
                   this.snackbar = true;
                   this.load = false;
                   this.close();
                   this.readData();
                   this.resetForm();
                   this.inputType = 'Tambah';
               }).catch(error => {
                   this.error_message = error.response.data.message;
                   this.color = "red";
                   this.snackbar = true;
                   this.load = false;
               })
           },
           // Hapus data produk
           deleteData() {
               var url = this.$api + '/orderkereta/' + this.deleteId;
               this.load = true;
               this.$http.delete(url, {
                   headers: {
                       'Authorization' : 'Bearer ' + localStorage.getItem('token')
                   }
               }).then(response => {
                   this.error_message = response.data.message;
                   this.color = "green";
                   this.snackbar = true;
                   this.load = false;
                   this.close();
                   this.readData();
                   this.resetForm();
                   this.inputType = 'Tambah';
               }).catch(error => {
                   this.error_message = error.response.data.message;
                   this.color = "red";
                   this.snackbar = true;
                   this.load = false;
               })
           },
           editHandler(item) {
               this.inputType = 'Ubah';
               this.editId = item.id;
               this.form.noKereta = item.noKereta;
               this.form.asal = item.asal;
               this.form.tujuan = item.tujuan;
               this.form.waktuBerangkat = item.waktuBerangkat;
               this.form.waktuTiba = item.waktuTiba;
               this.form.harga = item.harga;
               this.form.jumlahPenumpang = item.jumlahPenumpang;
               this.form.totalHarga = item.totalHarga;
               this.dialog = true;
           },
           deleteHandler(id) {
               this.deleteId = id;
               this.dialogConfirm = true;
           },
           close() {
               this.dialog = false;
               this.inputType = 'Tambah';
               this.dialogConfirm = false;
               this.readData();
           },
           cancel() {
               this.resetForm();
               this.readData();
               this.dialog = false;
               this.dialogConfirm = false;
               this.inputType = 'Tambah';
           },
           resetForm() {
               this.form = {
                   noKereta: null,
                   asal: null,
                   tujuan: null,
                   waktuBerangkat: null,
                   waktuTiba: null,
                   harga: null,
                   jumlahPenumpang: null,
                   totalHarga: null
               };
           },
       },
       computed: {
           formTitle() {
               return this.inputType;
           },
       },
       mounted(){
           this.readData()
       }
    }
</script>