(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0de310"],{8530:function(a,t,e){"use strict";e.r(t);var s=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("v-main",{staticClass:"listpesawat"},[e("v-container",[e("v-row",{attrs:{dense:""}},a._l(a.items,(function(t,s){return e("v-col",{key:s,attrs:{cols:"12"}},[e("v-card",[e("div",{staticClass:"d-flex flex-no-wrap justify-space-between"},[e("div",[e("v-card-title",{staticClass:"text-h5",domProps:{textContent:a._s(t.noPenerbangan)}}),e("v-card-subtitle",[a._v(a._s(t.asal)+" - "+a._s(t.tujuan))]),e("v-card-text",[a._v(a._s(t.waktuBerangkat)+" - "+a._s(t.waktuTiba))]),e("v-card-text",[a._v("Rp "+a._s(t.harga))]),e("v-card-actions",[e("v-btn",{staticClass:"ml-2 mt-5",attrs:{outlined:"",rounded:"",small:""},on:{click:function(e){return a.save(t)}}},[a._v(" Pesan Tiket ")])],1)],1),e("v-avatar",{staticClass:"ma-3",attrs:{size:"125",tile:""}},[e("v-img",{attrs:{src:t.src}})],1)],1)])],1)})),1)],1),e("v-snackbar",{attrs:{color:a.color,timeout:"2000",bottom:""},model:{value:a.snackbar,callback:function(t){a.snackbar=t},expression:"snackbar"}},[a._v(a._s(a.error_message))])],1)},r=[],n={name:"ListPesawat",data:function(){return{snackbar:!1,error_message:"",color:"",items:[{src:"https://asset.kompas.com/crops/3cQmGgXNtlok9hC6pB-GxIbA3b8=/0x0:0x0/750x500/data/photo/2020/10/12/5f83e110d24cb.jpeg",noPenerbangan:"AIR001",asal:"Yogyakarta",tujuan:"Jakarta",waktuBerangkat:"11.00",waktuTiba:"12.15",harga:"3000000"},{src:"https://asset-a.grid.id/crop/0x0:0x0/700x465/photo/nationalgeographic/201412291640030_b.jpg",noPenerbangan:"AIR002",asal:"Bandung",tujuan:"Yogyakarta",waktuBerangkat:"15.00",waktuTiba:"16.00",harga:"2000000"}]}},methods:{save:function(a){var t=this,e={noPenerbangan:a.noPenerbangan,asal:a.asal,tujuan:a.tujuan,waktuBerangkat:a.waktuBerangkat,waktuTiba:a.waktuTiba,harga:a.harga,idUser:localStorage.getItem("id"),jumlahPenumpang:1,totalHarga:a.harga},s=this.$api+"/orderpesawat";this.$http.post(s,e,{headers:{Authorization:"Bearer "+localStorage.getItem("token")}}).then((function(a){t.error_message=a.data.message,t.color="green",t.snackbar=!0,t.load=!0})).catch((function(a){t.error_message=a.response.data.message,t.color="red",t.snackbar=!0,t.load=!1}))}}},o=n,c=e("2877"),i=Object(c["a"])(o,s,r,!1,null,null,null);t["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d0de310.2901a9ed.js.map