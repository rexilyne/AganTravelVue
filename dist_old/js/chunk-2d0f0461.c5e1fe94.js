(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f0461"],{"9c56":function(a,e,t){"use strict";t.r(e);var r=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("v-main",{staticClass:"orderpesawat"},[t("v-card",[t("v-card-title",{staticClass:"text-h5 justify-center font-weight-bold"},[a._v("Order Pesawat")]),t("v-card-title",[t("v-text-field",{attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:a.search,callback:function(e){a.search=e},expression:"search"}})],1),t("v-data-table",{attrs:{headers:a.headers,items:a.orderPesawatArray,search:a.search,loading:a.load,"overflow-auto":""},scopedSlots:a._u([{key:"item.actions",fn:function(e){var r=e.item;return[t("v-icon",{staticClass:"mr-2",attrs:{"aria-label":"update",role:"button","aria-hidden":"false",color:"green",small:""},on:{click:function(e){a.editHandler(r),a.disableField=!0}}},[a._v(" mdi-pencil ")]),t("v-icon",{attrs:{"aria-label":"delete",role:"button","aria-hidden":"false",color:"red",small:""},on:{click:function(e){return a.deleteHandler(r.id)}}},[a._v(" mdi-delete ")])]}}],null,!0)})],1),t("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:a.dialog,callback:function(e){a.dialog=e},expression:"dialog"}},[t("v-card",[t("v-card-title",[t("span",{staticClass:"headline"},[a._v(a._s(a.formTitle))])]),t("v-card-text",[t("v-container",[t("v-text-field",{attrs:{label:"No Penerbangan",disabled:a.disableField},model:{value:a.form.noPenerbangan,callback:function(e){a.$set(a.form,"noPenerbangan",e)},expression:"form.noPenerbangan"}}),t("v-text-field",{attrs:{label:"Asal",disabled:a.disableField},model:{value:a.form.asal,callback:function(e){a.$set(a.form,"asal",e)},expression:"form.asal"}}),t("v-text-field",{attrs:{label:"Tujuan",disabled:a.disableField},model:{value:a.form.tujuan,callback:function(e){a.$set(a.form,"tujuan",e)},expression:"form.tujuan"}}),t("v-text-field",{attrs:{label:"Waktu Berangkat",disabled:a.disableField},model:{value:a.form.waktuBerangkat,callback:function(e){a.$set(a.form,"waktuBerangkat",e)},expression:"form.waktuBerangkat"}}),t("v-text-field",{attrs:{label:"Waktu Tiba",disabled:a.disableField},model:{value:a.form.waktuTiba,callback:function(e){a.$set(a.form,"waktuTiba",e)},expression:"form.waktuTiba"}}),t("v-text-field",{attrs:{label:"Harga",disabled:a.disableField},model:{value:a.form.harga,callback:function(e){a.$set(a.form,"harga",e)},expression:"form.harga"}}),t("v-text-field",{attrs:{label:"Jumlah Penumpang"},model:{value:a.form.jumlahPenumpang,callback:function(e){a.$set(a.form,"jumlahPenumpang",e)},expression:"form.jumlahPenumpang"}}),t("v-text-field",{attrs:{label:"Total Harga",disabled:a.disableField},model:{value:a.form.totalHarga,callback:function(e){a.$set(a.form,"totalHarga",e)},expression:"form.totalHarga"}})],1),t("v-card-actions",[t("v-spacer"),t("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:a.cancel}},[a._v("Cancel")]),t("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:a.setForm}},[a._v("Save")])],1)],1)],1)],1),t("v-dialog",{attrs:{persistent:"","max-width":"400px"},model:{value:a.dialogConfirm,callback:function(e){a.dialogConfirm=e},expression:"dialogConfirm"}},[t("v-card",[t("v-card-title",[t("span",{staticClass:"headline"},[a._v("Warning!")])]),t("v-card-text",[a._v(" Anda yakin ingin menghapus order bus ini? ")]),t("v-card-actions",[t("v-spacer"),t("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:function(e){a.dialogConfirm=!1}}},[a._v("Cancel")]),t("v-btn",{attrs:{color:"blue darken-1",text:""},on:{click:a.deleteData}},[a._v("Delete")])],1)],1)],1),t("v-snackbar",{attrs:{color:a.color,timeout:"2000",bottom:""},model:{value:a.snackbar,callback:function(e){a.snackbar=e},expression:"snackbar"}},[a._v(a._s(a.error_message))])],1)},n=[],l={name:"OrderPesawat",data:function(){return{inputType:"Tambah",load:!1,snackbar:!1,error_message:"",color:"",search:null,dialog:!1,dialogConfirm:!1,disableField:!1,headers:[{text:"No Penerbangan",align:"start",sortable:!0,value:"noPenerbangan"},{text:"Asal",value:"asal"},{text:"Tujuan",value:"tujuan"},{text:"Waktu Berangkat",value:"waktuBerangkat"},{text:"Waktu Tiba",value:"waktuTiba"},{text:"Harga",value:"harga"},{text:"Jumlah Penumpang",value:"jumlahPenumpang"},{text:"Total Harga",value:"totalHarga"},{text:"Actions",value:"actions"}],orderpesawat:new FormData,orderPesawatArray:[],form:{noPenerbangan:null,asal:null,tujuan:null,waktuBerangkat:null,waktuTiba:null,harga:null,jumlahPenumpang:null,totalHarga:null},deleteId:"",editId:""}},methods:{setForm:function(){"Tambah"!==this.inputType?this.update():this.save()},readData:function(){var a=this,e=this.$api+"/orderpesawat";this.$http.get(e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){a.orderPesawatArray=e.data.data,a.load=!1}))},save:function(){var a=this;this.orderpesawat.append("noPenerbangan",this.form.noPenerbangan),this.orderpesawat.append("asal",this.form.asal),this.orderpesawat.append("tujuan",this.form.tujuan),this.orderpesawat.append("waktuBerangkat",this.form.waktuBerangkat),this.orderpesawat.append("waktuTiba",this.form.waktuTiba),this.orderpesawat.append("harga",this.form.harga),this.orderpesawat.append("idUser",localStorage.getItem("id")),this.orderpesawat.append("jumlahPenumpang",this.form.jumlahPenumpang),this.orderpesawat.append("totalHarga",this.form.totalHarga);var e=this.$api+"/orderpesawat";this.load=!0,this.$http.post(e,this.orderpesawat,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){a.error_message=e.data.message,a.color="green",a.snackbar=!0,a.load=!0,a.close(),a.readData(),a.resetForm()})).catch((function(e){a.error_message=e.response.data.message,a.color="red",a.snackbar=!0,a.load=!1}))},update:function(){var a=this,e={noPenerbangan:this.form.noPenerbangan,asal:this.form.asal,tujuan:this.form.tujuan,waktuBerangkat:this.form.waktuBerangkat,waktuTiba:this.form.waktuTiba,harga:this.form.harga,idUser:localStorage.getItem("id"),jumlahPenumpang:this.form.jumlahPenumpang,totalHarga:this.form.harga*this.form.jumlahPenumpang},t=this.$api+"/orderpesawat/"+this.editId;this.load=!0,this.$http.put(t,e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){a.error_message=e.data.message,a.color="green",a.snackbar=!0,a.load=!1,a.close(),a.readData(),a.resetForm(),a.inputType="Tambah"})).catch((function(e){a.error_message=e.response.data.message,a.color="red",a.snackbar=!0,a.load=!1}))},deleteData:function(){var a=this,e=this.$api+"/orderpesawat/"+this.deleteId;this.load=!0,this.$http.delete(e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(e){a.error_message=e.data.message,a.color="green",a.snackbar=!0,a.load=!1,a.close(),a.readData(),a.resetForm(),a.inputType="Tambah"})).catch((function(e){a.error_message=e.response.data.message,a.color="red",a.snackbar=!0,a.load=!1}))},editHandler:function(a){this.inputType="Ubah",this.editId=a.id,this.form.noPenerbangan=a.noPenerbangan,this.form.asal=a.asal,this.form.tujuan=a.tujuan,this.form.waktuBerangkat=a.waktuBerangkat,this.form.waktuTiba=a.waktuTiba,this.form.harga=a.harga,this.form.jumlahPenumpang=a.jumlahPenumpang,this.form.totalHarga=a.totalHarga,this.dialog=!0},deleteHandler:function(a){this.deleteId=a,this.dialogConfirm=!0},close:function(){this.dialog=!1,this.inputType="Tambah",this.dialogConfirm=!1,this.readData()},cancel:function(){this.resetForm(),this.readData(),this.dialog=!1,this.dialogConfirm=!1,this.inputType="Tambah"},resetForm:function(){this.form={noPenerbangan:null,asal:null,tujuan:null,waktuBerangkat:null,waktuTiba:null,harga:null,jumlahPenumpang:null,totalHarga:null}}},computed:{formTitle:function(){return this.inputType}},mounted:function(){this.readData()}},o=l,s=t("2877"),i=Object(s["a"])(o,r,n,!1,null,null,null);e["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d0f0461.c5e1fe94.js.map