import Vue from "vue";
import VueRouter from "vue-router";
import App from "./detailsApp";
import logIn from "./logInApp";
import signUp from "./signUpApp";

Vue.use(VueRouter);

const router = new VueRouter({
  // mode: 'history', //加上不好使。出不来
  routes: [
    {
      path: "", 
      component: logIn 
    },
    { 
      path: "/logIn", 
      component: logIn 
    },
    { 
      path: "/signUp", 
      component: signUp 
    }
  ]
});

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
