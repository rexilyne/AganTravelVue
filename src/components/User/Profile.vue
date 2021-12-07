<template>
  <v-main>
    <v-container fluid fill-height class="">
      <v-layout flex align-center justify-center>
        <v-flex xs12 sm6 elevation-6>
          <v-card>
            <v-card-title class="justify-center font-weight-bold text-h6"
              >Data Profile</v-card-title
            >
            <v-card-text class="pt-4">
              <v-form v-model="valid" ref="form">
                  <v-text-field label="Name" v-model="name" :rules="nameRules" required></v-text-field>
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
                <v-layout justify-end class="mt-4">
                    <v-btn text class="blue--text mr-2" @click="update"
                    >Update</v-btn
                  >
                  <v-btn text class="red--text" @click="deleteHandler"
                    >Delete</v-btn
                  >
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
    <v-dialog v-model="dialogConfirm" persistent max-width="400px">
            <v-card>
                <v-card-title>
                    <span class="headline">Warning!</span>
                </v-card-title>
                <v-card-text>
                    Anda yakin ingin menghapus user ini?
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="dialogConfirm = false">Cancel</v-btn>
                    <v-btn color="blue darken-1" text @click="deleteData">Delete</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
  </v-main>
</template>

<script>
    export default {
        name: "Profile",
        data() {
            return {
                dialogConfirm: false,
                load: false,
                snackbar: false,
                error_message: '',
                color: '',
                valid: false,
                name: '',
                nameRules: [
                    (v) => !!v || 'Required', 
                ],
                password: '',
                passwordRules: [
                    (v) => !!v || 'Required', 
                ],
                email: '',
                emailRules: [
                    (v) => !!v || 'Required',
                ]
            };
        },
        methods: {
            readData() {
               var url = this.$api + '/user/' + localStorage.getItem('id');
               this.$http.get(url, {
                   headers: {
                       'Authorization' : 'Bearer ' + localStorage.getItem('token')
                   }
               }).then(response => {
                   this.name = response.data.data.name;
                   this.email = response.data.data.email;
                   this.load = false;
               })
           },
           
            update() {
               let newData = {
                   name : this.name,
                   email : this.email,
                   password : this.password,
               }
               var url = this.$api + '/user/' + localStorage.getItem('id');
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
                   this.readData();
               }).catch(error => {
                   this.error_message = error.response.data.message;
                   this.color = "red";
                   this.snackbar = true;
                   this.load = false;
               })
           },
           // Hapus data produk
           deleteData() {
               var url = this.$api + '/user/' + localStorage.getItem('id');
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
                   this.readData();
                   this.$router.push({
                        name: 'Welcome',
                    });
               }).catch(error => {
                   this.error_message = error.response.data.message;
                   this.color = "red";
                   this.snackbar = true;
                   this.load = false;
               });

           },
           deleteHandler() {
               this.dialogConfirm = true;
           },
        },

         mounted(){
           this.readData()
       }
    }
</script>