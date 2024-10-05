import React from 'react'
import './Footer.css'
import { Footer1 } from './Footer1'
import { HiMiniLanguage } from "react-icons/hi2";

const Footer = () => {
  return (
  <>
  <div className='footer'>
    <div className='footer1'>
      <p>Questions? Call <a href="">000-800-919-1694</a></p>
  </div>
  <div className='footer2'>
    <Footer1
      name1="FAQ"
      name2="Investor Relations"
      name3="Privacy"
      name4="Speed Test"
    />
    <Footer1
      name1="Help Centre" 
      name2="Jobs"
      name3="Cookie Preferences"
      name4="Legal Notices"
    />
    <Footer1
      name1="Account"
      name2="Ways to Watch"
      name3="Corporate Information"
      name4="Only on Netflix"
    />
    <Footer1
      name1="Media Centre"
      name2="Terms of Use"
      name3="Contact Us"
    />
    </div>
    <div className='footer4'>
    <span><HiMiniLanguage />
        <select  name="" id=""> 
          <option value="">English</option>
          <option value="">हिन्दी</option>
          <option value="">Español</option>
      </select>
    </span>
    <h5>Netflix India</h5>
    </div>
    </div>
    </>
  )
}

export default Footer