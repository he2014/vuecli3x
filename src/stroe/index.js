import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'
Vue.use(Vuex);
const state = {
    add: ''
}


export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations

})


