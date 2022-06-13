import React from 'react'
import { VscVerified } from "react-icons/vsc";
import {MdDeveloperMode} from 'react-icons/md'
import TypeWriterEffect from 'react-typewriter-effect';
import { Link } from 'react-router-dom';

import './Home.css'

function Home() {
  return (
    <div className='Homepage'> 
        <div className="profilepic">
          <h2 style={{fontWeight:'900',color:'black',fontSize:'45px'}}>Mohamed Ishaque <span style={{display:'inline',color:'royalblue'}}><VscVerified/> </span> </h2>
                 <div className="typewriter">
          {/* <Typewriter
       onInit={(typewriter)=> {
       typewriter
       .typeString("Full stack Developer  🚀")         
       .pauseFor(2000)
       .start();
       }}
       /> */}
      <TypeWriterEffect
            textStyle={{ fontSize: '35px' }}
            startDelay={100}
            cursorColor="black"
            text="Full stack Developer  🚀"
            typeSpeed={100}
            
          />
       
        </div>
        <div className="ownstyle">
          <Link to='/Projects' style={{ textDecoration: 'none',color:'black' }}> <div className="card">  Projects </div> </Link>
           <Link to='/About' style={{ textDecoration: 'none',color:'black' }}><div className="card"> About </div> </Link>
          <Link to='/Contact' style={{ textDecoration: 'none',color:'black' }}> <div className="card"> Contact </div> </Link>
        </div>
        </div>
        
    </div>
  )
}

export default Home