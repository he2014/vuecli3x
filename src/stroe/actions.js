import { ADD } from './mutations-type'
export default {
    async add({ commit, state }, str) {
        if (!str) return;
        commit(ADD, str);
    }
}