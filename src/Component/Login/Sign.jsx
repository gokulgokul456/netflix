import React from 'react'
import './Sign.css'
import logo from '../../Assets/Images/netflix.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Sign = () => {
    let navigate=useNavigate()
    const [first, setfirst] = useState({username:"",password:""})

    function getdata(event) {
        let data=event.target.name
        let get=event.target.value

        setfirst({...first,[data]:get})
    }
    console.log(first);
    let users=[
        {
            user:"Gokul",
            pin:111
        },
        {
            user:"ja",
            pin:222
        }
    ]

    function click(params) {
        users.map(function(click) {
            if (click.user==first.username&&click.pin==first.password) {
                
                navigate("/Home")
            } 
            else {
                console.log("username is incorrect");
                
            }

            
        })
        
    }

    


  return (
    <>
    <div className='bg'>
    <div className='blend1'>
    <div className='Navv'>
    <img src={logo} alt="" />
    </div>
    <div className='sign'>
    <div className='sign1'>
        <h1>Sign In</h1>
        <input type="email" placeholder='Email or Mobile Number' name='username' onChange={getdata} />
        <input type="password" placeholder='Password' name='password' onChange={getdata} />
        <button className='btnn1' onClick={click}>Sign In</button>
        <p>OR</p>
        <button className='btnn'>Use a Sign-In Code</button>
        <a href="">Forget Password?</a>
        <div className='sign2'>
            <div className='sign3'>
                <input type="checkbox"/>
                <span>Remember me</span>
            </div>
            <div className='sign4'>
                <p>New to Netflix ?</p><a href="">Sign up now.</a>
            </div>
            <div className='sign5'>
                <p>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p><a href="">Learn more</a>

            </div>
            
        </div>
    </div>
    </div>
    
    </div>
    </div>
    </>
  )
}

export default Sign