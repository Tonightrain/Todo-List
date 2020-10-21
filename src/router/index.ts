import App from "@/App.vue";
import VueRouter from "vue-router";
import Vue from "vue";
import Todolist from "@/components/Todolist.vue";
import Home from "@/view/Home.vue";
import ErrorPage from "@/view/ErrorPage.vue";
import home1 from "@/view/home1.vue"


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location: import("vue-router").RawLocation) {
    // @ts-ignore
    return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            // component:Home,
            component:home1,
            children: [
                {
                    path: '/All',
                },
                {
                    path: '/Active',
                },
                {
                    path: '/Completed',
                },
            ],
        },
        {
            path: '*',
            component:ErrorPage,
        }
    ]
})


