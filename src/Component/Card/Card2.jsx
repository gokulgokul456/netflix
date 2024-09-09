import React from 'react'
import './Card2.css'
import logo from '../../Assets/Images/tv.jpeg'


const Card2 = (props) => {
  return (
    <>
    <div className='car1'>
        <div className='car2'>
            <h3>{props.title}</h3>
            <p>{props.para}</p>
        </div>
        <div className='carimg'>
          <img src={logo} alt="" />


        </div>
        
    </div>

    </>
  )
}

export default Card2