import React from 'react'
import './Main2.css'
import { FaPlus } from "react-icons/fa6";

import { useState } from 'react';
const Main2 = (props) => {
  const [first, setfirst] = useState(null)


  function opendiv(event) {
    console.log(event);
    setfirst((pre) => (pre === event ? null : event));
  }
  
  return (
    <>
    <div className="bar">
       <div className='bar2'>
       <p>What is Netflix ?</p>
        <span>
          <FaPlus onClick={()=>opendiv("first")} />
        </span>
       </div>
        <div className={first=="first"? "opens" :"open1"}>
        Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
        </div>
      </div>
      
      <div className="bar">
        <div className='bar2'>
        <p>How much does Netflix cost ?</p>
        <span>
          <FaPlus onClick={()=>opendiv("second")} />
        </span>
        </div>
        <div className={first=="second"? "opens" :"open1"}>
        Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.
        </div>
      </div>

      <div className="bar">
      <div className='bar2'>
       <p>Where can i watch ?</p>
        <span>
          <FaPlus onClick={()=>opendiv("third")} />
        </span>
       </div>
        <div className={first=="third"? "opens" :"open1"}>
        Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favourite.
        </div>
      </div>

      <div className="bar">
      <div className='bar2'>
       <p>How do i cancel ?</p>
        <span>
          <FaPlus onClick={()=>opendiv("four")} />
        </span>
       </div>
        <div className={first=="four"? "opens" :"open1"}>
        Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
        </div>
      </div>

      <div className="bar">
      <div className='bar2'>
       <p>What can i watch on Netflix ?</p>
        <span>
          <FaPlus onClick={()=>opendiv("five")} />
        </span>
       </div>
        <div className={first=="five"? "opens" :"open1"}>
        Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
        </div>
      </div>

      <div className="bar">
      <div className='bar2'>
       <p>Is Netflix good for kids ?</p>
        <span>
          <FaPlus onClick={()=>opendiv("six")} />
        </span>
       </div>
        <div className={first=="six"? "opens" :"open1"}>
        The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
        </div>
      </div>
    </>
  )
}

export default Main2