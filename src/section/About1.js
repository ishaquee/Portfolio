import React from 'react'
import './About1.css'
import { Link } from 'react-router-dom';

function About1() {
  return (
    <div className='about1'>
        <div className='story'>
            <h2 className='center head'> Long story short about me </h2>
            <p className='notes'>I am a Final-year engineering student at Karpgam college of Engineering, Coimbatore, currently undertaking my Bachelor in Computer Science Engineering.</p>
            <p className='notes'>I'm a Tech-Enthusiast with experience in building Full-Stack Web Applications.</p>
        </div>

        <div className='story'>
            <h2 className='center head'> Achievements </h2>
            <p className='notes'>Partcipated In Smart India Hackathon-2022. <img src='https://iic.iitbhilai.ac.in/images/SIH2.png' width='40px' height='40px'  /> </p>
            <p className='notes'>Completed Google Cloud Facilator Program at 2021. <img src='https://miro.medium.com/max/1400/1*czvs-vQHdVXudAFudSuiiw.gif' width='40px' height='40px' /> </p>
        </div>
        <div className='story'>
        <Link to='/resume'  style={{ textDecoration: 'none'}} className='ht'>     <h6 className='center goto' style={{border:'2px solid black',width:'max-content'}}>  Get to know more about me </h6> </Link>
        </div>
    </div>
  )
}

export default About1