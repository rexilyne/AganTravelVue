(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3e908167"],{b0c0:function(e,t,a){var s=a("83ab"),r=a("5e77").EXISTS,n=a("e330"),i=a("9bf2").f,l=Function.prototype,o=n(l.toString),c=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,u=n(c.exec),d="name";s&&!r&&i(l,d,{configurable:!0,get:function(){try{return u(c,o(this))[1]}catch(e){return""}}})},de73:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-main",[a("v-container",{attrs:{fluid:"","fill-height":""}},[a("v-layout",{attrs:{flex:"","align-center":"","justify-center":""}},[a("v-flex",{attrs:{xs12:"",sm6:"","elevation-6":""}},[a("v-card",[a("v-card-title",{staticClass:"justify-center font-weight-bold text-h6"},[e._v("Mari bergabung dengan AganTravel")]),a("v-card-text",{staticClass:"pt-4"},[a("v-form",{ref:"form",model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-text-field",{attrs:{label:"Name",rules:e.nameRules,required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),a("v-text-field",{attrs:{label:"E-mail",rules:e.emailRules,required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),a("v-text-field",{attrs:{label:"Password",type:"password",rules:e.passwordRules,required:""},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),a("v-layout",{staticClass:"mt-4",attrs:{"justify-center":""}},[a("v-btn",{staticClass:"blue darken-1 white--text",attrs:{block:""},on:{click:e.submit}},[e._v("Register")])],1),a("v-layout",{staticClass:"mt-2",attrs:{"justify-center":""}},[a("div",{staticClass:"caption"},[e._v(" Sudah punya akun? "),a("a",{staticClass:"text-decoration-none",attrs:{href:"/authentication/login"}},[e._v("Login")])])])],1)],1)],1),a("v-snackbar",{attrs:{color:e.color,timeout:"2000",bottom:""},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v(e._s(e.error_message))])],1)],1)],1)],1)},r=[],n=(a("b0c0"),{name:"Register",data:function(){return{load:!1,snackbar:!1,error_message:"",color:"",valid:!1,name:"",nameRules:[function(e){return!!e||"Required"}],password:"",passwordRules:[function(e){return!!e||"Required"}],email:"",emailRules:[function(e){return!!e||"Required"}]}},methods:{submit:function(){var e=this;this.$refs.form.validate()&&(this.load=!0,this.$http.post(this.$api+"/register",{name:this.name,email:this.email,password:this.password}).then((function(t){e.error_message=t.data.message,e.color="green",e.snackbar=!0,e.load=!1,e.clear(),e.$router.push({name:"Login"})})).catch((function(t){e.error_message=t.response.data.message,e.color="red",e.snackbar=!0,e.load=!1})))},clear:function(){this.$refs.form.reset()},login:function(){this.$router.push({name:"Login"})}}}),i=n,l=a("2877"),o=Object(l["a"])(i,s,r,!1,null,null,null);t["default"]=o.exports}}]);
//# sourceMappingURL=chunk-3e908167.de009970.js.map