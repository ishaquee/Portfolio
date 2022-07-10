import React from 'react'
import './Project1.css'
import  data from './resources/Data.json'
import {RiLiveFill} from 'react-icons/ri'

function Projects1() {
  return (
      <div className='ProjectPage'>
          <h2 className='royal'> My Projects</h2>
          <p className='center font' style={{color:'black',fontSize:'15px',fontWeight:'600',padding:'10px',margin:'10px',letterSpacing:'2px'}}> I began my journey with programming back in 2018 with C (nuts and bolts). At the conclusion of 2021, I restarted with WordPress and, after that, moved on to Web Advancement. Right presently, I am learning MERN and so distant adoring the journey...</p>
          <div className='projects'>
              {
                 data ? data.map((item)=> {
                     return(
<div className="card">
  <img className="card-img-top" src={item.image } style={{width:'270px',height:'150px'}} alt="Card  cap"/>
  <div className="card-body">
    <h5 className="card-title center">{item.title}</h5>
    <p className="card-text">{item.desc} </p>
    <div className='tech'>
      <h3 style={{color:'black',fontSize:'14px',fontWeight:'bold'}}> Technologies Used In this Projects </h3> 
     { item.technologies ?   item.technologies.map((comment,index)=> 
       <h6 key={index} className='tech1'style={{fontWeight:'bold'}} > {comment} </h6>
     ) : '' } 
   </div>
   <div className='center' style={{borderTop:'1px solid black'}}> 
    <a href={item.url} target="_blank"  style={{textDecoration:'none',margin:'10px'}}> <div className='btn center'>  {item.text} </div> </a>
   </div>
  </div>
</div>
                   )  }) : ''
              }
          
    </div>
    </div>
  )
}

export default Projects1