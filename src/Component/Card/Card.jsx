import React from 'react'
import './Card.css'
import Card2 from './Card2'

const Card = () => {
  return (
    <>
    <div className='card1'>
        <div className='card2'>
            <p>More reasons to join</p>
        </div>
        <div className='card3'>
            <Card2
            title="Enjoy on your TV"
            para="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
            />
            <Card2
            title="Download your shows to watch offline"
            para="Save your favourites easily and always have something to watch."
            />
            <Card2
            title="Watch everywhere"
            para="Stream unlimited movies and TV shows on your phone, tablet, laptop and TV."
            /><Card2
            title="Create profiles for kids"
            para="Send kids on adventures with their favourite characters in a space made just for them — free with your membership."
            />

        </div>

    </div>

    </>
  )
}

export default Card