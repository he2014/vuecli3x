import { ADD } from './mutations-type'
export default {
    async add({ commit }, str) {
        if (!str) return;
        commit(ADD, str);
    }
}