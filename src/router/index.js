// 第一步，import 引入
import {createRouter,createWebHistory} from 'vue-router'

// 第二步:定义路由规则
const routes=[
    {
        path: '/tag',
        component: () => import('@/views/basic/TagPage.vue')
    },
    {
        path: '/button',
        component: () => import('@/views/basic/ButtonPage.vue')
    },
    {
        path: '/card',
        component: () => import('@/views/basic/CardPage.vue')
    },
    {
        path: '/container',
        component: () => import('@/views/basic/ContainerPage.vue')
    },
    {
        path: '/menu',
        component: () => import('@/views/basic/MenuPage.vue')
    },
    {
        path: '/layout',
        component: () => import('@/views/basic/LayoutPage.vue')
    }
]

// 第三步:初始化路由实例
const router=createRouter({
    // hash 模式: createWebHashHistory
    // history 模式: createWebHistory
    history:createWebHistory(),
    routes
})

// 第四步:export 出去
export default router