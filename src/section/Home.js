import React from 'react'
import { VscVerified } from "react-icons/vsc";
import {MdDeveloperMode} from 'react-icons/md'
import TypeWriterEffect from 'react-typewriter-effect';
import { Link } from 'react-router-dom';

import './Home.css'

function Home() {
  return (
    <div className='home center'>
          <div className='Homepage'> 
        <div className="profilepic">
          <h2 style={{fontWeight:'900',color:'darkred',fontSize:'45px',letterSpacing:'3px',padding:''}}>Hi everyone! </h2>
        <h2 style={{fontWeight:'900',color:'darkred',fontSize:'45px',letterSpacing:'3px',padding:''}}> I'm  Mohamed Ishaque </h2>

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
            textStyle={{ fontSize: '25px',fontWeight:'600'}}
            cursorColor="white"
            text="I am a Full Stack Developer with experience in developing web-based software"
            typeSpeed={60}
            
          />
       
        </div>
        </div>   
    </div>

    </div>

  )
}

export default Home