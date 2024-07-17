import { userService } from "../../services/user.service.js";

export const SET_USER = 'SET_USER'
export const SET_USER_BALANCE = 'SET_USER_BALANCE'


const initialState = {
    loggedinUser: userService.getLoggedinUser(),
}

 export function userReducer(state = initialState, action = {}) {
    switch (action.type) {
       
        case SET_USER:
            return { ...state, loggedinUser : action.loggedinUser }

        case SET_USER_BALANCE:

        const  user =   { ...state.loggedinUser,data:{...state.loggedinUser.data,balance:action.balance}     }  
            return { ...state, loggedinUser:user }


        default:
            return state
    }
}