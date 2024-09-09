import React from 'react'
import './Main.css'
import Props from './Props'
import logo from '../../Assets/Images/card5.webp'



const Main = () => {
  return (
    <>
    <div className='main1'>
    <div className='main2'>
    <div className='main3'>
        <h3>Trending Now</h3> 
    </div>
    <div className='main4'>
    <select name="" id="">
        <option value="">India</option>
        <option value="">United States</option>
        <option value="">Global</option>
    </select>
    <select name="" id="">
        <option value="">Movies</option>
        <option value="">TV Shows</option>
    </select>
    </div>
    </div>
    </div>
    <div className='main5'>
        <Props
        image={logo}
        title="1"
        />
       


    </div>

    </>
  )
}

export default Main