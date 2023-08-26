import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Home from "../views/Home.vue";
import MasterUser from "../views/MasterUser.vue";
import { getCurrentUser } from "../api";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/",
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  if (requiresAuth && !(await getCurrentUser())) {
    next('/login')
  } else {
    next()
  }
})

export default router;
