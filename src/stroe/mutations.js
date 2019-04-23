import { ADD } from './mutations-type';

export default {
    [ADD](state, str) {
        state.add = str;
    }
}