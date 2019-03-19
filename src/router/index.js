import Vue from 'vue'
import VueRouter from 'vue-router'
import {
    AsyncComponent
} from '../components/asyncComponent'
Vue.use(VueRouter)
const routes = [{
    path: "/",
    component: () => AsyncComponent(import('../components/HelloWorld'))

}]



export default new VueRouter({
    routes
})