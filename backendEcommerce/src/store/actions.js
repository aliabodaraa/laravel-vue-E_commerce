import axiosClient from "../axios";
import store from '../store'
export function getUser({ commit }, data) {
    return axiosClient.get('/user', data)
        .then((resData) => {
            commit('setUser', resData);
            return resData;
        });
}
export function login({ commit }, data) {
    return axiosClient.post('/login', data)
        .then((resData) => {
            console.log('ali');
            commit('setUser', resData.data.user);
            commit('setToken', resData.data.token);
            return resData;
        }).catch((err) => {
            console.log("OOps1", err);
        });
}
export function logout({ commit }) {
    //console.log(store.state.user.token, "--------");
    return axiosClient.delete('/logout')
        .then((res) => {
            //commit('logout');
            commit('setToken', null);
            return res;
        }).catch((err) => {
            debugger;
            console.log("OOpssssssssssssssssssssssss2", err);
            return err;
        });
}