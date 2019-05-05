import Vue from 'vue'
import VueRouter from 'vue-router'
import {
    AsyncComponent
} from '../components/asyncComponent'
<<<<<<< HEAD
import table from '../page'
Vue.use(VueRouter)
const routes = [{
    path: "/",
    component: () => AsyncComponent(import('../components/zhexiantu'))

}, {
    path: "/a",
    name: 'b',
    component: table
=======
Vue.use(VueRouter)
const routes = [{
    path: "/",
    component: () => AsyncComponent(import('../components/HelloWorld'))

>>>>>>> df4e7e4... first1
}]



export default new VueRouter({
<<<<<<< HEAD
    mode: 'history',
=======
>>>>>>> df4e7e4... first1
    routes
})