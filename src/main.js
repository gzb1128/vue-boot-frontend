import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import store from "./store/index.js";

import "./assets/main.css";

axios.defaults.baseURL = "http://localhost:7676/api";
const app = createApp(App);
app.config.globalProperties.$axios = axios;
app.use(ElementPlus);
app.use(router);
app.use(store);

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    if (store.state.userInfo.Auth) {
      next();
    } else {
      next({
        path: "login",
        query: { redirect: to.fullPath },
      });
    }
  } else {
    next();
  }
});

app.mount("#app");
