import { createStore } from "vuex";
import { authentication } from "./modules/AuthFirebase";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    authentication: authentication,
  },
});
