import Vue from 'vue'
import VueRouter from 'vue-router'
import {
    AsyncComponent
} from '../components/asyncComponent'
import table from '../page'
Vue.use(VueRouter)
const routes = [{
    path: "/",
    component: () => AsyncComponent(import('../components/zhexiantu'))

}, {
    path: "/a",
    name: 'b',
    component: table
}]



export default new VueRouter({
    mode: 'history',
    routes
})