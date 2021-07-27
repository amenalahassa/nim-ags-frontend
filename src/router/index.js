import { createRouter, createWebHistory } from 'vue-router'
import NotFound from "../views/NotFound";
import ComponentLayout from "../views/ComponentLayout";
import {subscriptionRoutes} from "./subscription.routes";

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: {name: 'subscription'}
  },
  {
    path: '/subscription',
    component: ComponentLayout,
    children: subscriptionRoutes
  },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
