import React from 'react'
import './Main.css'
import Props from './Props'
import logo1 from '../../Assets/Images/card5.webp'
import logo2 from '../../Assets/Images/card1.webp'
import logo3 from '../../Assets/Images/card2.webp'
import logo4 from '../../Assets/Images/card3.webp'
import logo5 from '../../Assets/Images/card4.webp'
import logo6 from '../../Assets/Images/card6.webp'
import logo7 from '../../Assets/Images/card7.webp'
import logo9 from '../../Assets/Images/card9.webp'
import logo10 from '../../Assets/Images/card10.webp'

import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode , Navigation} from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

import './Style.css';



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
        
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        freeMode={true}
        navigation={true}
        
        modules={[FreeMode, Navigation,]}
        className="mySwiper"
      >
        <SwiperSlide>
        <Props
        image={logo1}
        title="1"
        />
        </SwiperSlide>

        <SwiperSlide>
        <Props
        image={logo2}
        title="2"
        />
        </SwiperSlide>

        <SwiperSlide>
        <Props
        image={logo3}
        title="3"
        />
        </SwiperSlide>

        
        <SwiperSlide>
        <Props
        image={logo4}
        title="4"
        />
        </SwiperSlide>


        <SwiperSlide>
        <Props
        image={logo5}
        title="5"
        />
        </SwiperSlide>

        <SwiperSlide>
        <Props
        image={logo6}
        title="6"
        />
        </SwiperSlide>
        
        <SwiperSlide>
        <Props
        image={logo7}
        title="7"
        />
        </SwiperSlide>
        
        <SwiperSlide>
        <Props
        image={logo9}
        title="8"
        />
        </SwiperSlide>

        <SwiperSlide>
        <Props
        image={logo10}
        title="9"
        />
        </SwiperSlide>


       
      </Swiper>
       


    </div>

    </>
  )
}

export default Main