import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import NotFound from "../views/NotFound.vue";
import MasterUser from "../views/MasterUser.vue";
import store from '../store';

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true,
    },
    redirect: "/masteruser",
    children: [
      {
        name: "Master User",
        path: "/masteruser",
        component: MasterUser,
      },
    ],
  },
  { 
    path: '/:pathMatch(.*)*', 
    component: NotFound
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  var isHasToken = store.state.authentication.signIn?.data?.token != null;
  if (requiresAuth && !isHasToken) {
    next('/')
  } else {
    next()
  }
})

export default router;
