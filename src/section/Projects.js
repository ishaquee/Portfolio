import React from 'react'
import './Project.css'
import  data from './Data.json'
function Projects() {
  return (
      <div className='ProjectPage'>
          <h2 className='royal'>Project List</h2>
          <div className='projects'>
              {
                 data ? data.map((item)=> {
                     return(
<div className="card" style={{width:'350px'}}>
  <img className="card-img-top" src={item.image} style={{width:'200px',height:'200px'}} alt="Card  cap"/>
  <div className="card-body">
    <h5 className="card-title">{item.title}</h5>
    <p className="card-text">{item.desc} </p>
    <a href={item.url} target="_blank"  style={{textDecoration:'none',color:'black'}}> <div className='btn center'>  {item.text} </div> </a>
  </div>
</div>
                   )  }) : ''
              }
          
    </div>
    </div>
  )
}

export default Projects