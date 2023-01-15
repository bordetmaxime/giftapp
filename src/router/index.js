import { createRouter, createWebHashHistory } from "vue-router";

import HomeComponent from "@/views/HomeComponent.vue";
import ListComponent from "@/components/ListComponent.vue";
import AddListComponent from "@/components/AddListComponent.vue"

const routes = [
  {
    path: "/",
    name: "HomeComponent",
    component: HomeComponent,
    meta: {
      title: 'GiftApp'
    }
  },
  {
    path: "/list",
    name: "ListComponent",
    component: ListComponent,
    meta: {
      title: 'GiftList'
    }
  },
  {
    path: "/addlist",
    name: "AddListComponent",
    component: AddListComponent,
    meta: {
      title: 'AddGift'
    }
  }
];


const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.afterEach((to, from) => {
  console.log(from, to);
  document.title = to.meta.title;
})

export default router;