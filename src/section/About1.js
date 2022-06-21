import React from 'react'
import './About1.css'
import { Link } from 'react-router-dom';

function About1() {
  return (

    <div className='abt1'>  
  <div className='center1'>
  <div className='bbt'>
   <div className='image1'>
  <img src='https://res.cloudinary.com/instaclone2022/image/upload/v1655812825/portfolio/WhatsApp_Image_2022-06-02_at_12.36.46_PM_dxrur3.jpg' />
   </div>
   <h3 style={{fontWeight:'bold',fontSize:'20px',margin:'10px'}} className='center name1' > Mohamed Ishaque </h3>
   <p className='text-primary center role ' style={{fontWeight:'900'}}>Full Stack Developer </p>
   <p className='center bio'>Secure a responsible career opportunity to fully utilise my training and skills while making a significant contribution to the success of the company.</p>
   </div>
  </div>
    
      
     
        <div className='story'>
            <h2 className='center head'> To cut a long story short, </h2>
            <p className='notes'>I am a Final-year engineering student at Karpgam college of Engineering, Coimbatore, currently undertaking my Bachelor in Computer Science Engineering.</p>
            <p className='notes'>I'm a tech enthusiast with experience in building full-stack web applications.</p>
        </div>

        <div className='story'>
            <h2 className='center head'> Achievements </h2>
            <p className='notes'>Partcipated In Smart India Hackathon-2022. <img src='https://lh3.googleusercontent.com/jOOCxt0YRNlAEmJ4In1roEjEyjisdGakTGTzPzxdjB8KtpIU4VIUVxVNshcjqRUGejQ' width='40px' height='40px'  /> </p>
            <p className='notes'>Completed Google Cloud Facilator Program at 2021. <img src='https://png2.cleanpng.com/sh/6816de6056879c8e34327c8bae8a5562/L0KzQYm3VMExN5xwfZH0aYP2gLBuTfdwd5hxfZ9sbHB4dH73jPF1bpD3hZ9sbHB4dH7qjB1xfaVuhtk2Ynnqgcbskwkub5D0Rdl4b3fvdX68gfNkbmppTKdvM0WzQ3A5WcM4PGU3SKMAMkO2SIOAVMA0QV91htk=/kisspng-google-cloud-platform-cloud-computing-bigquery-goo-google-5accf9d45f3503.29374420152338274039.png' width='40px' height='40px' /> </p>
        </div>
        {/* <div className='story'>
        <Link to='/resume'  style={{ textDecoration: 'none'}} className='ht'>     <h6 className='center goto' style={{border:'2px solid black',width:'max-content'}}>  Get to know more about me </h6> </Link>
        </div> */}
   
    
    </div>

  )
}

export default About1