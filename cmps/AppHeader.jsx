const { Link, NavLink } = ReactRouterDOM
const { useNavigate } = ReactRouter

const {useSelector,useDispatch}=ReactRedux

import { userService } from '../services/user.service.js'
import { UserMsg } from "./UserMsg.jsx"
import { LoginSignup } from './LoginSignup.jsx'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'
import { INCREMENT } from '../store/store.js'
import {logout} from '../store/user.action.js'



export function AppHeader() {
    const dispatch=useDispatch()
    
    const count=useSelector(state=>state.count)
    const navigate = useNavigate()
    const user = useSelector ( state =>  state.loggedinUser)
    
    function onLogout() {
        logout()
        .then(() => {
            navigate('/')
         })
            .then(() => {
               showSuccessMsg('log out!')
            })
            .catch((err) => {
                showErrorMsg('OOPs try again')
            })

            dispatch({type:INCREMENT})
    }

    return (
        <header className="app-header full main-layout">
            <section className="header-container">
                <h1>React Todo App</h1>
                {user ? (
                    < section >

                        <Link to={`/user/${user._id}`}>Hello {user.fullname}</Link>
                        <p> balance:{user.data.balance}</p>
                        <button onClick={onLogout}>Logout</button>
                    </ section >
                ) : (
                    <section>
                        <LoginSignup   />
                    </section>
                )}
                <nav className="app-nav">
                    <NavLink to="/" >Home</NavLink>
                    <NavLink to="/about" >About</NavLink>
                    <NavLink to="/todo" >Todos</NavLink>
                    <NavLink to="/dashboard" >Dashboard</NavLink>
                </nav>
            </section>
            <UserMsg />
        </header>
    )
}
