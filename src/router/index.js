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
    },
    {
        path: '/form',
        component: () => import('@/views/form/FormPage.vue')
    },
    {
        path: '/validate',
        component: () => import('@/views/form/ValidatePage.vue')
    },
    {
        path: '/reset',
        component: () => import('@/views/form/ResetPage.vue')
    },
    {
        path: '/custom-validate',
        component: () => import('@/views/form/CustomValidate.vue')
    },
    {
        path: '/upload',
        component: () => import('@/views/form/UploadPage.vue')
    },
    {
        path: '/table',
        component: () => import('@/views/table/BasicPage.vue')
    },
    {
        path: '/selection',
        component: () => import('@/views/table/SelectionPage.vue')
    },
    {
        path: '/multi-selection',
        component: () => import('@/views/table/MultiSelection.vue')
    },
    {
        path: '/sortable',
        component: () => import('@/views/table/SortablePage.vue')
    },
    {
        path: '/search',
        component: () => import('@/views/table/SearchPage.vue')
    },
    {
        path: '/custom-column',
        component: () => import('@/views/table/CustomColumn.vue')
    },
    {
        path: '/pagination',
        component: () => import('@/views/table/PaginationPage.vue')
    },
    {
        path: '/alert',
        component: () => import('@/views/feedback/AlertPage.vue')
    },
    {
        path: '/message',
        component: () => import('@/views/feedback/MessagePage.vue')
    },
    {
        path: '/dialog',
        component: () => import('@/views/feedback/DialogPage.vue')
    },
    {
        path: '/confirm',
        component: () => import('@/views/feedback/PopconfirmPage.vue')
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