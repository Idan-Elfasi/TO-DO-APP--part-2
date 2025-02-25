import { userService } from "../services/user.service.js";
import { SET_USER, SET_USER_BALANCE } from "./reducers/user.reducer.js";
import { store } from "./store.js";


export function login(credentials) {
    return userService.login(credentials)
        .then((loggedinUser) => { store.dispatch({ type: SET_USER, loggedinUser }) })
}
export function signup(credentials) {
    return userService.signup(credentials)
        .then((loggedinUser => { store.dispatch({ type: SET_USER, loggedinUser }) }))
}
 export function logout() {
  return  userService.logout()
        .then(() => { store.dispatch({ type: SET_USER, loggedinUser: null }) })
}
export function taskComplete(){
    userService.updateScore(10)
    .then((balance ) => {
        console.log(`balance : ${balance}`)
        store.dispatch( { type: SET_USER_BALANCE, balance})
    })
}