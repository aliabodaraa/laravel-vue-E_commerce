import { createStore } from "vuex";
import * as actions from "./actions";
import * as mutations from "./mutations";

const store = createStore({
    state: {
        user: {
            data: {},
            token: sessionStorage.getItem('Token'),
            name: "aliiiiiiiiiiiii",

        },
        notification: {
            show: false,
            type: null,
            message: null,
        },
    },
    getters: {},
    actions,
    mutations,
});
export default store