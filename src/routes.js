import ProductIndex from "./pages/ProductIndex.vue";
import ProductCreate from "./pages/ProductCreate.vue";
import ProductDetail from "./pages/ProductDetail.vue";
import ProductEdit from "./pages/ProductEdit.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "products.index",
    component: ProductIndex
  },
  {
      path: "/products/create",
      name: "products.create",
      component: ProductCreate
  },
  {
      path: "/products/:id/edit",
      name: "products.edit",
      component: ProductEdit,
      props: true
  },
  {
      path: "/products/:id/details",
      name: "products.details",
      component: ProductDetail,
      props: true
  }
];

const router = createRouter({
  routes: routes,
  history: createWebHistory(),
});

export { router };
