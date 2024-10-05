import React from 'react'
import {useSelector} from 'react-redux';
import Nav from '../../Component/Nav/Nav'
import Swipe from '../../Component/Swipe/Swipe';
import Nav2 from '../../Component/Nav2/Nav2'
import Footer from '../../Component/Footer/Footer';

const Movie = () => {
    let thirdmovie=useSelector( function (data) {
        return data.thirdmovie         
    })
    let series=useSelector( function (data) {
        return data.series          
    })
    let secondseries=useSelector( function (data) {
      return data.secondseries         
    })
  return (
    <>
    <Nav/>
    <Nav2 late={thirdmovie}
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

export default Movie