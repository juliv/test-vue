import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import PeopleView from "@/views/PeopleView.vue";
import PersonView from "@/views/PersonView.vue";
import PeopleFavoriteView from "@/views/PeopleFavoriteView.vue";
import NotFoundView from "@/views/NotFoundView.vue";
import {paths} from "@/router/paths";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: paths.home,
    component: HomeView,
  },
  {
    path: '/people',
    name: paths.people,
    component: PeopleView,
  },
  {
    path: '/people/:id(\\d+)',
    name: paths.person,
    component: PersonView,
    props: true,
  },
  {
    path: '/favorite',
    name: paths.favorite,
    component: PeopleFavoriteView,
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
