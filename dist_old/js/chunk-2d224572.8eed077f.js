(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d224572"],{e05f:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-main",[a("v-container",{attrs:{fluid:"","fill-height":""}},[a("v-layout",{attrs:{flex:"","align-center":"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm6:"","elevation-6":""}},[a("v-card",[a("v-card-title",{staticClass:"justify-center font-weight-bold text-h6"},[e._v("Selamat datang di AganTravel")]),a("v-card-text",{staticClass:"pt-4"},[a("v-form",{ref:"form",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{attrs:{label:"E-mail",rules:e.emailRules,required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("v-text-field",{attrs:{label:"Password",type:"password",rules:e.passwordRules,required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("v-layout",{staticClass:"mt-4",attrs:{"justify-center":""}},[a("v-btn",{staticClass:"blue darken-1 white--text",attrs:{block:""},on:{click:e.submit}},[e._v("Login")])],1),a("v-layout",{staticClass:"mt-2",attrs:{"justify-center":""}},[a("div",{staticClass:"caption"},[e._v(" Belum punya akun? "),a("a",{staticClass:"text-decoration-none",attrs:{href:"/authentication/register"}},[e._v("Register")])])])],1)],1)],1),a("v-snackbar",{attrs:{color:e.color,timeout:"2000",bottom:""},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(e._s(e.error_message))])],1)],1)],1)],1)},r=[],o={name:"Login",data:function(){return{load:!1,snackbar:!1,error_message:"",color:"",valid:!1,password:"",passwordRules:[function(e){return!!e||"Required"}],email:"",emailRules:[function(e){return!!e||"Required"}]}},methods:{submit:function(){var e=this;this.$refs.form.validate()&&(this.load=!0,this.$http.post(this.$api+"/login",{email:this.email,password:this.password}).then((function(t){localStorage.setItem("id",t.data.user.id),localStorage.setItem("token",t.data.access_token),e.error_message=t.data.message,e.color="green",e.snackbar=!0,e.load=!1,e.clear(),e.$router.push({name:"Home"})})).catch((function(t){e.error_message=t.response.data.message,e.color="red",e.snackbar=!0,localStorage.removeItem("token"),e.load=!1})))},clear:function(){this.$refs.form.reset()},register:function(){this.$router.push({name:"Register"})}}},l=o,i=a("2877"),n=Object(i["a"])(l,s,r,!1,null,null,null);t["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d224572.8eed077f.js.map