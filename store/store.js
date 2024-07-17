const { createStore, combineReducers, compose } = Redux

import { todoService } from "../services/todo.service.js"
import { userService } from "../services/user.service.js"
import { utilService } from "../services/util.service.js"

export const INCREMENT = 'INCREMENT'

export const SET_USER = 'SET_USER'
export const SET_USER_BALANCE = 'SET_USER_BALANCE'


const initialState = {
    count: 50,
    todos: [],
    isLoading: false,
    filterBy: todoService.getDefaultFilter(),
    loggedinUser: userService.getLoggedinUser(),
}

function appReducer(state = initialState, action = {}) {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 }
        case SET_TODOS:
            return { ...state, todos: action.todos }
        // store.dispatch in the js action file  update the action object and play the appReducer function ,
        // then  update the shareabale state  by the updated action object
        case REMOVE_TODO:
            var todos = state.todos.filter(todo => todo._id !== action.todoId)
            return { ...state, todos }
        case ADD_TODO:
            return { ...state, todos : [...state.todos, action.todo] }
        case UPDATE_TODO:
            var todos = state.todos.map(todo => todo._id === action.todo._id ? action.todo : todo)
            return { ...state, todos }
        case SET_IS_LOADING:
            return { ...state, isLoading: action.isLoading }

        case SET_FILTER_BY:
            return { ...state, filterBy : { ...state.filterBy, ...action.filterBy } }

        case SET_USER:
            return { ...state, loggedinUser : action.loggedinUser }

        case SET_USER_BALANCE:

        const  user =   { ...state.loggedinUser,data:{...state.loggedinUser.data,balance:action.balance}     }  
            return { ...state, loggedinUser:user }


        default:
            return state
    }
}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export const store = createStore(appReducer, composeEnhancers())

window.gStore = store