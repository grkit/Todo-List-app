import React from 'react'
import {useNavigate } from 'react-router-dom'



const About = () => {
   const navigation = useNavigate();

  return (
    <div className='about'>
      <button>Go To Home</button>
    </div>
  )
}

export default About
