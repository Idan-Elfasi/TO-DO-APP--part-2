import { userService } from "../services/user.service.js";
import { store, SET_USER } from "./store";


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