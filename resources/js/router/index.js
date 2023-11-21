import {createRouter, createWebHistory } from 'vue-router';

import HomeComponents from '../components/HomeComponents.vue'

const routes =[

    {
        path:'/',
        name:'Home',
        component:HomeComponents
    }




]


const router = createRouter({
  history: createWebHistory(),
  routes
})



export default router
