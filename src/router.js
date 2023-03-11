import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import MainPage from './components/MainPage.vue'
import TestPage from './components/TestPage.vue'
import Movies from './components/Movies.vue'
import Rates from './components/Rates.vue'
import Food from './components/Food.vue'
import ContactUs from './components/ContactUs.vue'

const routes = [{
    path: '/',
    name: 'root',
    component: App
  },
  {
    path: '/Home',
    name: "mainPage",
    component: MainPage
  },
  {
    path: '/TestPage',
    name: "testPage",
    component: TestPage
  },
  {
    path: '/Movies',
    name: "movies",
    component: Movies
  },
  {
    path: '/Rates',
    name: "rates",
    component: Rates
  },
  {
    path: '/Food',
    name: "food",
    component: Food
  },
  {
    path: '/ContactUs',
    name: "contactUs",
    component: ContactUs
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;