import React from 'react'
import { VscVerified } from "react-icons/vsc";
import {MdDeveloperMode} from 'react-icons/md'
import TypeWriterEffect from 'react-typewriter-effect';
import { Link } from 'react-router-dom';

import './Home.css'

function Home() {
  return (
    <div className='home'>
          <div className='Homepage'> 
        <div className="profilepic">
          <h2 style={{fontWeight:'900',color:'darkred',fontSize:'45px',letterSpacing:'3px',padding:''}}>Hello everyone! </h2>
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
            textStyle={{ fontSize: '25px' }}
            startDelay={100}
            cursorColor="white"
            text="Welcome on my portfolio page! I'm a React & Nodejs Developer."
            typeSpeed={200}
            
          />
       
        </div>
        </div>   
    </div>

    </div>

  )
}

export default Home