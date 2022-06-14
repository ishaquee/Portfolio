import React from 'react'
import './About.css'
import {FaUserCircle,FaLinkedin,FaInstagram} from 'react-icons/fa'
import {BsFillCalendarDateFill} from 'react-icons/bs'
import {GiThink} from 'react-icons/gi'
import {FiMail,FiLinkedin} from 'react-icons/fi'
function About() {
  return (
  
    <div class="parent">
<div class="div1">
    <div className='center' style={{borderBottom:'1px solid black'}}>
        <h5 style={{fontSize:'55px'}}> <FaUserCircle/> </h5>
        <h6 style={{fontWeight:'800',color:'deeppink',fontSize:'20px'}}>Mohamed Ishaque S </h6>
    </div>
    <div style={{borderBottom:'1px solid black',marginTop:'3px'}}>
        <h6 className='center' style={{fontWeight:'bolder'}}>CAREER OBJECTIVE</h6>
        <p style={{fontWeight:'600'}}>  • Secure a responsible career opportunity to fully utilize my training and skills,
while making a significant contribution to the success of the company </p>
    </div>
    <div style={{borderBottom:'1px solid black',marginTop:'3px'}}>
    <h6 className='center' style={{fontWeight:'800'}}>WORK EXPERIENCE</h6>
    <p style={{fontWeight:'600',color:'black'}}> <span style={{fontWeight:'bold'}}> SDET </span> at <span style={{fontWeight:'bold',color:'red'}}> ENGATI </span> Technologies Private Limited  <img src='https://branding-resources.s3.ap-south-1.amazonaws.com/default/engati-chat-icon-v2.gif' width='30px' height='30px' /> </p>
    <p style={{fontWeight:100}} className='date'> <BsFillCalendarDateFill/> Sep 2021 - Now </p>
    </div>
    <div style={{borderBottom:'1px solid black',marginTop:'3px'}}>
    <h6 className='center' style={{fontWeight:'800'}}>PROJECTS </h6>
    <p style={{fontWeight:'600',color:'black'}}>  Social Media Web APP Using MERN <img src='https://www.transparentpng.com/thumb/logo-instagram/o0u6HK-logo-instagram-clipart-file.png' width='30px' height='30px'/> </p>
    <p style={{fontWeight:100}} className='date'> <BsFillCalendarDateFill/> Jan 2022 - May 2022 <BsFillCalendarDateFill/></p>

    <p style={{fontWeight:'600',color:'black'}}> <span style={{color:'red'}}>  Covid 19 </span> tracking Web APP <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/SARS-CoV-2_without_background.png/800px-SARS-CoV-2_without_background.png' width='30px' height='30px'/> </p>
    <p style={{fontWeight:100}} className='date'> <BsFillCalendarDateFill/> Jun 2021 - July 2021 <BsFillCalendarDateFill/> </p>

    </div>
     </div>
     <div className='flex'>
<div class="div2"> 
<h6 style={{fontWeight:'900',color:'Highlight',fontSize:'18px'}}> TECHNICAL SKILLS </h6>
<h5 className='center' style={{color:'whitesmoke',fontWeight:'800'}}> Programming Languages </h5>
<div className='frontend'>
<h6 style={{fontWeight:'bold',padding:'5px'}} > C </h6>
<h6 style={{fontWeight:'bold',padding:'5px'}} > Java </h6>
<h6 style={{fontWeight:'bold',padding:'5px'}} > Python </h6>
</div>
<h5 className='center' style={{color:'whitesmoke',fontWeight:'800'}}> Front - end </h5>
<div className='frontend'>
<h6 style={{fontWeight:'bold',padding:'5px'}} > ReactJs </h6>
<h6 style={{fontWeight:'bold',padding:'5px'}} > HTML </h6>
<h6 style={{fontWeight:'bold',padding:'5px'}} > CSS </h6>
</div>
<h5 className='center' style={{color:'whitesmoke',fontWeight:'900'}}> Back - end </h5>
<div className='frontend'>
<h6 style={{fontWeight:'bold',padding:'5px'}} > Django </h6>
<h6 style={{fontWeight:'bold',padding:'5px'}} > NodeJS </h6>
</div>
<h5 className='center' style={{color:'whitesmoke',fontWeight:'900'}}> DB </h5>
<div className='frontend'>
<h6 style={{fontWeight:'bold',padding:'5px'}} > MySql </h6>
<h6 style={{fontWeight:'bold',padding:'5px'}} > MongoDB </h6>
</div>
 </div>
<div class="div3">
<h6 style={{fontWeight:'900',color:'Highlight',fontSize:'18px'}}> PERSONAL SKILLS </h6>
<div className='frontend'>
<h6 style={{fontWeight:'bold',padding:'5px'}} > Self Starter </h6>
<h6 style={{fontWeight:'bold',padding:'5px'}} > Communication </h6>
<h6 style={{fontWeight:'bold',padding:'5px'}} > Flexible & Adaptable </h6>
</div>

     </div>
<div class="div4"> 
<h6 className='' style={{fontWeight:'900',fontSize:'18px',color:'Black'}}>EDUCATION</h6>
<div style={{borderBottom:'1px solid black',marginTop:'3px'}}>
    <p style={{fontWeight:'600',color:'black'}}> <span style={{fontWeight:'bold'}}> BE - CSE </span> at <span style={{fontWeight:'bold',color:'Blue'}}> Karpagam </span> College Of Engineering  </p>
    <p style={{fontWeight:100,color:'black'}} className='date'> <BsFillCalendarDateFill/> AUG 2018 - Now </p>
    </div>
    <div style={{borderBottom:'1px solid black',marginTop:'3px'}}>
    <p style={{fontWeight:'600',color:'black'}}> <span style={{fontWeight:'bold'}}> HSS </span> at <span style={{fontWeight:'bold',color:'Blue'}}> Bishop </span> Heber Hr Sec School  </p>
    <p style={{fontWeight:100,color:'black'}} className='date'> <BsFillCalendarDateFill/>  AUG 2016 - APR-2018 <BsFillCalendarDateFill/> </p>
    </div>
</div>
<div className="div5">
<h6 style={{fontWeight:'900',color:'Highlight',fontSize:'18px'}} className='' > How to reach me <GiThink/> ? </h6>
<div className='frontend'> 
 <a href='mailto:ishaquemohamed5@gmail.com' style={{textDecoration:"none"}}><h6 style={{fontWeight:'bold',padding:'10px',textDecoration:'none'}}>Email <span style={{color:'darkred'}}><FiMail/> </span>  </h6></a> 
 <a href='https://www.linkedin.com/in/smishaque/' target="_blank" style={{textDecoration:"none"}}><h6 style={{fontWeight:'bold',padding:'10px',textDecoration:'none'}}>Linkedin <span style={{color:'darkblue'}}> <FaLinkedin/></span>  </h6></a> 
 <a href='https://www.instagram.com/ishaque_110/' target="_blank" style={{textDecoration:"none"}}><h6 style={{fontWeight:'bold',padding:'10px',textDecoration:'none'}}>Instagram <span style={{color:'red'}}><FaInstagram/> </span>  </h6></a> 
</div>
</div>

</div>
</div>
   
  )
}

export default About