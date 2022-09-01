import { createRouter, createWebHistory} from 'vue-router'
import store from '../store/index'
import Home from '../pages/Home.vue'
import ModelHome from '../pages/ModelHome.vue'
import Introduce from '../pages/Introduce.vue'
import Review from '../pages/Review.vue'
import Reference from '../pages/Reference.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'home', component: Home, title: '홈', icon: 'fas fa-home fa-fw text-2xl', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true } },
        { path: '/introduce', name: 'introduce', component: Introduce, title: '도키소개', icon: 'far fa-bell fa-fw text-2xl', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true } },
        { path: '/review', name: 'review', component: Review, title: '고객리뷰', icon: 'far fa-bell fa-fw text-2xl', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true } },
        { path: '/modelselect', name: 'modelselect', component: ModelHome, title: '견적내기', icon: 'far fa-bell fa-fw text-2xl', meta: { isMenu: false, layout: 'ModelLayout', requireAuth: true } },
        { path: '/reference', name: 'reference', component: Reference, title: '포트폴리오', icon: 'far fa-bell fa-fw text-2xl', meta: { isMenu: true, layout: 'DefaultLayout', requireAuth: true } },
        // {
        //     path: "/:pathMatch(.*)*",  name: "notFound", component: NotFound,  meta: { isMenu: false } ,
        // },
    ],    
})


export default router