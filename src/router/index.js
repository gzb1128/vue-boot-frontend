import { createRouter, createWebHistory } from "vue-router";
import AppIndex from "@/components/home/AppIndex.vue";
import AppLogin from "@/components/AppLogin.vue";
import Home from "@/components/Home.vue";
import LibraryIndex from "@/components/library/LibraryIndex.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/test",
      name: "test",
      component: AppIndex,
    },
    {
      path: "/login",
      name: "AppLogin",
      component: AppLogin,
    },
    {
      path: "/home",
      name: "Home",
      component: Home,
      redirect: "/index",
      children: [
        {
          path: "/index",
          name: "AppIndex",
          component: AppIndex,
          meta: {
            requireAuth: true,
          },
        },
        {
          path: "/library",
          name: "LibraryIndex",
          component: LibraryIndex,
          meta: {
            requireAuth: true,
          },
        },
      ],
    },
  ],
});

export default router;
