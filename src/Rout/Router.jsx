import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Enter from '../Pages/Enter/Enter'
import Home from '../Pages/Home/Home'
import Login from '../Component/Login/Sign'
import Movie from '../Pages/Movie/Movie'
import Series from '../Pages/Series/Series'
import Viewcart from '../Component/Viewcart/Viewcart'

const Router = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Enter/>}/>
    <Route path='/Login' element={<Login/>}/>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/Movie' element={<Movie/>}/>
    <Route path='/Series' element={<Series/>}/>
    <Route path='/viewcart' element={<Viewcart/>}/>


        
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default Router