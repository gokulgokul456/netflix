import React from 'react'
import './Swipe.css'
import swip from '../../Assets/Images/movie-01.jpg'
import {useDispatch} from "react-redux"
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode , Navigation} from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { myreduce } from '../Redux/Store';

const Swipe = (props) => {
  const navigate=useNavigate()
  const dispatch=useDispatch()
    console.log(props.latest);
    let arrays=props.latest

    function displaydata(e) {
      console.log(e);
      
      let filterdata=arrays.filter(function (data) {
        return data.title==e
      })
      console.log(filterdata);
      dispatch(myreduce.filterdatas(filterdata))
      navigate("/viewcart")
    }
  return (
    <>
    <div className='swip'>
        <h1>{props.title}</h1>
        <Swiper
        slidesPerView={6}
        spaceBetween={30}
        freeMode={true}
        navigation={true} 
        modules={[FreeMode, Navigation,]}
        className="mySwiper"
      >
        {arrays.map(function (data) {
            return(<SwiperSlide>
<div className='cartrimg'>
<img src={data.imageUrl} alt="" />
<div className='top'>
  <h2 style={{color:"white"}}>{data.title}</h2>
  <p style={{color:"white"}}>Quality : HD</p>
  <button onClick={()=>displaydata(data.title)}>Watch Now</button>
</div>
</div>            
            </SwiperSlide>)
            
        })}

        
        

      
      </Swiper>
    </div>
    

    </>
  )
}

export default Swipe