import Login from '../pages/Login/Login'
import Home from '../pages/Home/Home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


export default function AppRoutes (){

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login />}/>
                <Route path='/' element={<Home />}/>
            </Routes>
        </BrowserRouter>
    )
}