import Vue from 'vue'
import Router from 'vue-router'
import MoviesList from '@/pages/MoviesList'
import HomePage from '@/pages/HomePage'
import DetailPage from '@/pages/DetailPage'
import OrderPage from '@/pages/OrderPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/movieslist'
    },
    {
      path: '/homepage',
      name: 'Home Page',
      component: HomePage,
      children: [
        {
          path: '/movieslist',
          name: 'Movies List',
          component: MoviesList
        },
        {
          path: '/detailpage/:movieId',
          name: 'Detail Page',
          component: DetailPage
        },
        {
          path: '/orderpage',
          name: 'Order Page',
          component: OrderPage
        }
      ]
    }
  ]
})
