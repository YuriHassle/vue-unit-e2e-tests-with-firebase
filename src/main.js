import Vue from "vue";
import App from "./App.vue";

import router from "./router";
//import store from "./store";
import firebase from "firebase/app";
import axios from "axios";

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

const firebaseConfig = {
  apiKey: "AIzaSyALgck5bvWWJHz5PIOPCiu0MD4jMlO7kDk",
  authDomain: "vue-testing-60a2c.firebaseapp.com",
  projectId: "vue-testing-60a2c",
  storageBucket: "vue-testing-60a2c.appspot.com",
  messagingSenderId: "903941432070",
  appId: "1:903941432070:web:83029155dcde294f0e7487",
  measurementId: "G-WT63M65WZF",
};

firebase.initializeApp(firebaseConfig);

let app;

firebase.auth().onAuthStateChanged((user) => {
  console.log("user", user);
  if (!app) {
    app = new Vue({
      router,
      //store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
