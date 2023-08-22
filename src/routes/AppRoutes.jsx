import Login from '../pages/Login/Login'
import Home from '../pages/Home/Home'

function AppRoutes (){
    const lista = [
        {
            path: '/login',
            element: <Login />,
            hasLayout: false,
            isPrivate: false,
        },
        {
            path: '/home',
            element: <Home />,
            hasLayout: false,
            isPrivate: false,
        }
    ]    
}