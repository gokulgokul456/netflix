import React from 'react'
import './Navbar.css'
import logo from '../../Assets/Images/netflix.png'
import { HiMiniLanguage } from "react-icons/hi2";
import { FaChevronRight } from "react-icons/fa";
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <>
    <div className='bg'>
    <div className='blend'>
     <div className='Nav'>
        <img src={logo} alt="" />
     <div className='btn'>
    <span><HiMiniLanguage />
    <select  name="" id=""> 
            <option value="">English</option>
            <option value="">हिन्दी</option>
            <option value="">Español</option>
      </select>
    </span>
    <Link to="/Login"><button>Sign In</button></Link>
    </div>
    </div>
    <div className='main'>
    <div className='main-1'>
      <p>Unlimited movies, TV </p>
      <p>shows and more</p>
    </div>
    <div className='main-2'>
      <p>Starts at ₹149. Cancel anytime.</p>
      <h6>Ready to watch? Enter your email to create or restart your membership.</h6>
    </div>
    <div className='main-3'>
      <input type="text" placeholder='Email address' />
      <button>Get Started<FaChevronRight /></button>
    </div>
    </div>
    </div>  
    </div>     
    </>
  )
}

export default Navbar