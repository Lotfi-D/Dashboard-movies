import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListMovies from '../views/ListMoviesView.vue'
import FavoritesMovies from '../views/FavoritesMoviesView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/list',
    name: 'listMovies',
    component: ListMovies
  },
  {
    path: '/favorites',
    name: 'favoritesMovie',
    component: FavoritesMovies
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
