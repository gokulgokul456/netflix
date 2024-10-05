import React from 'react'
import './Nav2.css'
import swipe from '../../Assets/Images/slider-1.jpg'
import swipe1 from '../../Assets/Images/slider-2.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { useNavigate } from 'react-router-dom';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';
import { useDispatch } from 'react-redux';
import { myreduce } from '../Redux/Store';


const Nav2 = (props) => {
  const dispatch = useDispatch()
  const navigate=useNavigate()

  let arrays1=props.late
  console.log(arrays1);

  function displaydata(e) {
    console.log(e);

    let filterdata=arrays1.filter(function (data) {
      return data.title==e 
    })
    console.log(filterdata);
    dispatch(myreduce.filterdatass(filterdata))
    navigate("/viewcart")


    
  }
  

  return (
    <>
<div className='swipe123'>
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
    {arrays1.map(function (data) {
      return(<SwiperSlide>
        <div className='po'>
            <img src={data.imageUrl} alt="" />
            <div className='rate'>
                <h1>{data.title}</h1>
                <p>{data.genre}<span>{data.director}</span></p> 
                <button onClick={()=>displaydata(data.title)} >Watch Now</button>
            </div>
            </div>
        </SwiperSlide>)
    })}
      </Swiper>
    </div>
     
    </>
  )
}

export default Nav2