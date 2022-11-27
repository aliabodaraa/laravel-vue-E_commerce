export function setUser(state, resData) {
    state.user.data = resData;
}
export function setToken(state, token) {
    state.user.token = token;
    if (token) { //for login
        sessionStorage.setItem('Token', token);
    } else { //for logout
        sessionStorage.removeItem('Token');
    }
    console.log(token, state.user.token);
}
// export function logout(state) {
//     console.log("aloshe logout");
//     state.user.data = {};
//     state.user.token = null;
//     console.log(sessionStorage.getItem('Token'));
// }
export function notify(state, { message, type }) {
    state.notification.show = true;
    state.notification.type = type;
    state.notification.message = message;
    setTimeout(() => {
        state.notification.show = false;
    }, 4000);
}