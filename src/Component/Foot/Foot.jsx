import React from 'react'
import './Foot.css'
import { FaChevronRight } from "react-icons/fa";

const Foot = () => {
  return (
    <>
    <div className='foot'>
    <div className='foot2'>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>
    </div>
    <div className='foot3'>
      <input type="text" placeholder='Email address' />
      <button>Get Started<FaChevronRight /></button>
    </div>
    </div>
    </>
  )
}

export default Foot