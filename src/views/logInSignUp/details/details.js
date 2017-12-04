import Vue from "vue";
import VueRouter from "vue-router";
import App from "./detailsApp";
// import logIn from "./logInApp";
// import signUp from "./signUpApp";

// const routes = [
//   { 
//     path: "/logIn", 
//     component: logIn 
//   },
//   { 
//     path: "/signUp", 
//     component: signUp 
//   }
// ];

// Vue.use(VueRouter);

// const router = new VueRouter({
//   routes: routes,
//   mode: "history"
// });

new Vue({
  router: h => h(App)
}).$mount("#app");
