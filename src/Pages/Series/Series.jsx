import React from 'react'
import {useSelector} from 'react-redux';
import Swipe from '../../Component/Swipe/Swipe';
import Nav2 from '../../Component/Nav2/Nav2';
import Nav from '../../Component/Nav/Nav';
import Footer from '../../Component/Footer/Footer';

const Series = () => {
    let firstseries=useSelector( function (data) {
        return data.firstseries          
    })
    let series=useSelector( function (data) {
      return data.series          
  })
  let secondseries=useSelector( function (data) {
    return data.secondseries         
})
  
    console.log(firstseries);
    
  return (
    
    <>
    <Nav/>
    <Nav2 late={firstseries}
    />
    <Swipe latest={series}
    title="LATEST MOVIES"/>

    <Nav2 late={secondseries}
    />
    
    <Swipe latest={series}
    title="Hollywood Movies"/>

    <Footer/>

    </>
  )
}

export default Series