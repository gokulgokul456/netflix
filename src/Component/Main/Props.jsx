import React from 'react'
import './Props.css'
const Props = (props) => {
  return (
    <>
    <div className='cart'>
    <div className='cartimg'>
        <img src={props.image} alt="" />
    </div>
    <div className='cartcont'>
        <h1>{props.title}</h1>
    </div>
    </div>
    </>
  )
}

export default Props