import App from "@/App.vue";
import VueRouter from "vue-router";
import Vue from "vue";
import Todolist from "@/components/Todolist.vue";
import Home from "@/components/Home.vue";
import ErrorPage from "@/components/ErrorPage.vue";

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
            component:Home,
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


