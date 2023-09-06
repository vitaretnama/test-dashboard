import { createStore } from "vuex";
import { authentication } from "./modules/AuthFirebase";

export default createStore({
  modules: {
    authentication: authentication,
  },
});
