import React from 'react'
import './Home.css'
import Navbar from '../../Component/Navbar/Navbar'
import Main from '../../Component/Main/Main'
import Card from '../../Component/Card/Card'
import Main1 from '../../Component/Main1/Main1'
import Foot from '../../Component/Foot/Foot'
import Footer from '../../Component/Footer/Footer'

const Home = () => {
  return (
    <>
    <Navbar/>
    <Main/>
    <Card/>
    <Main1/>
    <Foot/>
    <Footer/>
    </>
  )
}

export default Home