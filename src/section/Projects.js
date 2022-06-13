import React from 'react'
import './Project.css'
import  data from './Data.json'
import {RiLiveFill} from 'react-icons/ri'
function Projects() {
  return (
      <div className='ProjectPage'>
          <h2 className='royal'>Project List</h2>
          <div className='projects'>
              {
                 data ? data.map((item)=> {
                     return(
<div className="card">
  <img className="card-img-top" src={item.image} style={{width:'200px',height:'200px'}} alt="Card  cap"/>
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">{item.desc} </p>
    <div className='tech'>
      <h3 style={{color:'black',fontSize:'15px',fontWeight:'bold'}}> Technologies Used In this Projects </h3> 
     { item.technologies ?   item.technologies.map((comment,index)=> 
       <h6 key={index} className='tech1'style={{fontWeight:'bold'}} > {comment} </h6>
     ) : '' } 
   </div>
   <div className='center'> 
   <h5 style={{fontSize:'15px',fontWeight:'bold'}}>Click the button to see Project Live <span style={{color:'red'}}><RiLiveFill/></span>  </h5>
    <a href={item.url} target="_blank"  style={{textDecoration:'none',color:'black'}}> <div className='btn center'>  {item.text} </div> </a>
   </div>
  </div>
</div>
                   )  }) : ''
              }
          
    </div>
    </div>
  )
}

export default Projects