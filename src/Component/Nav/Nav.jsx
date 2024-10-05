import React from 'react'
import './Nav.css'
import logo from '../../Assets/Images/netflix.png'
import { CiSearch } from "react-icons/ci";
import { IoIosNotifications } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import {Link} from 'react-router-dom'





const Nav = () => {
  return (
    <>
    <div className='Nav1'>
      <div className='Na2'>
        <img src={logo} alt="" />
        <Link to="/Home"><p>Home</p></Link>
        <Link to="/Movie"><p>Movies</p></Link>
        <Link to="/Series"><p>Series</p></Link>
      </div>

      <div className='Na3'>
        <span><CiSearch /></span>
        <span><IoIosNotifications /></span>
        <span><FaUserCircle /></span>
        <button>Subscribe</button>
      </div>
    </div>

    </>
  )
}

export default Nav