import React from 'react'
import { useSelector } from 'react-redux'
import './Viewcart.css'
import Nav from '../Nav/Nav'
import logo from '../../Assets/Images/slider-2.jpg'
import Foot from '../Foot/Foot'
import Footer from '../Footer/Footer'
const Viewcart = () => {
    const selector=useSelector(function (data) {
        return data.filterdata
    })
    console.log(selector);
    
  return (
    <>
    <Nav/>
    {selector.map(function (data) {
      return (
       <div>
         <div className='titles'>
      <h2>{data.title}</h2>
      <h2>1hr 45minutes</h2>
      <span>{data.releaseDate}</span>
      <h2>{data.genre}</h2>
      <h2>U/A 18+</h2>
    </div>
    <div className='cartimgg'>
      <img src={data.imageUrl} alt="" />
    </div>
    <div className='cart'>
      <div className='director'>
        <h3 style={{color:"red"}}>Director : </h3>
        <span style={{color:"rgb(121,121,121)"}}>{data.director}</span>

      </div>
      <div className='cast'>
        <h3 style={{color:"red"}}> Cast : </h3>
        <span style={{color:"rgb(121,121,121)"}}>{data.cast}</span>

      </div>
      <div className='plot'>
        <h3 style={{color:"red"}}>Plot :</h3>
        <span style={{color:"rgb(121,121,121)"}} >{data.plot}</span>
      </div>
    </div>
       </div>
      )
      
    })}
    
    <Footer/>
    

    
    </>
  )
}

export default Viewcart