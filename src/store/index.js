import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      userInfo: {
        userName: "",
        password: "",
        Auth: false,
      },
    };
  },
  mutations: {
    loginState(state, user) {
      state.userInfo = user;
    },
  },
});

export default store;
