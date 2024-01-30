// router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AboutPage from '../views/AboutPage.vue';
import EventsPage from '../views/EventsPage.vue';
import EventPage from '../views/EventPage.vue';
import LogIn from '../views/LogIn.vue';
import SignUp from '../views/SignUp.vue';
import MerchandisePage from '../views/MerchandisePage.vue';

const routes = [
  {
    path: '/',
    name:'home',
    component: HomePage
  },
  {
    path: '/about',
    name:'About',
    component: AboutPage
  },
  {
    path: '/events',
    name:'Events',
    component: EventsPage
  },
  {
    path: '/eventpage',
    name:'EventPage',
    component: EventPage
  },
  {
    path: '/login',
    name:'LogIn',
    component: LogIn
  },
  {
    path: '/signup',
    name:'SignUp',
    component: SignUp
  },
  {
    path: '/merchandise',
    name:'Merchandise',
    component: MerchandisePage
  }
  // Add more routes as needed
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
