import React from 'react'
import './contact.css'
import {FaWordpress,FaReact} from 'react-icons/fa'
function Contact() {
  return (
    <div className='contact center'>
      <h2>You want stunning website for yourself ?</h2>
      <h2>Want to hire me for your freelancing works ?</h2>
      <h6 style={{fontSize:'25px',fontWeight:'900'}}> <span style={{borderBottom:'0.1px solid black'}}> Serives </span></h6>

      <div className='center services'> 
        <div className='service' >
        <img src='https://media2.giphy.com/media/3de1kqCxacXCh2s3NF/200w.gif' width={'100px'} height={'100px'} style={{borderRadius:'0px'}} />

          <h5> <span style={{color:'darkBlue'}}> Wordpress</span>  Development   </h5>
          <p>We design and implement websites for companies using the WordPress creation tool. We are responsible for both front-end and back-end development, including the implementation of themes and plugins. our goal is to create attractive and user-friendly websites according to client specifications.</p>
        </div>
        <div className='center service' >
          <img src='https://i.pinimg.com/originals/16/fe/7e/16fe7e7fb6eebb3087b6dc418748ee56.gif' width={'100px'} height={'100px'} style={{borderRadius:'5px'}} />
          <h5> <span style={{color:'red'}}> Front</span> end / <span style={{color:'red'}}> UI</span>  Development </h5>
          <p> We are Build web applications with web development best practices. Transform app designs into front-end code with HTML, CSS, and JavaScript </p>
        </div>
        <div className='service' >
          <img src='https://onepatch.com/wp-content/uploads/2020/03/NODEJS_CIRCLE.gif' width={'100px'} height={'100px'} style={{borderRadius:'5px',margin:'5px'}} />
          <h5> <span style={{color:'darkgreen',fontWeight:'bolder'}}> Backend</span> Development </h5>
          <p>We will be managing the exchange of data between the server and the users. we will be focus on the development of all server-side logic, maintenance, and definition of the central database, and ensuring high performance and responsiveness to requests from the front-end</p>
        </div>
        <div className='service'>
        <img src='https://i.pinimg.com/originals/fc/71/63/fc71635c7f1b09ed30413f59bb749582.gif' width={'100px'} height={'100px'} style={{borderRadius:'5px',margin:'5px'}} />
          <h5>  <span style={{color:'darkorange',fontWeight:'bolder'}}> Data </span>   Analytics <span style={{fontSize:'12px'}}> (Tableau & PowerBi)</span> </h5>
          <p>collects and analyzes data across the business to make informed decisions or assist other team members and leadership in making sound decisions.</p>
        </div>
      </div>

<div>
  <h6 style={{fontWeight:'900',marginTop:'20px',fontSize:'25px'}}> <span style={{borderBottom:'0.1px solid black'}}> Contact me </span>   </h6>

  <div className='contacts'>
    <div className='contact1'>
    <img src='https://cdn.dribbble.com/users/2113992/screenshots/14510264/gmail_animation.gif' width={'100px'} height={'100px'} style={{borderRadius:'5px',margin:'5px'}} />
          {/* <h5>  <span style={{color:'darkorange',fontWeight:'bolder'}}> G</span>mail </h5> */}
          <a href='mailto:ishaquemohamed5@gmail.com' style={{textDecoration:"none"}}><h6 style={{fontWeight:'bold',padding:'10px',textDecoration:'none',color:'black'}}><span style={{color:'darkred'}}>G</span>mail </h6></a> 
    </div>
    <div className='contact1'>
    <img src='https://www.edigitalagency.com.au/wp-content/uploads/linkedin-logo-gif-funny-man-suitcase.gif' width={'100px'} height={'100px'} style={{borderRadius:'5px',margin:'5px'}} />
    <a href='https://www.linkedin.com/in/smishaque/' target="_blank" style={{textDecoration:"none"}}><h6 style={{fontWeight:'bold',padding:'10px',textDecoration:'none',color:'black'}}><span style={{color:'darkblue'}}> L</span>inkedin  </h6></a> 
    </div>
    <div className='contact1'>
    <img src='https://qph.cf2.quoracdn.net/main-qimg-4e9467f024454dfa2b0a0e61074aebd1' width={'90px'} height={'90px'} style={{borderRadius:'5px',margin:'5px'}} />
    <a href='https://www.instagram.com/ishaque_110/' target="_blank" style={{textDecoration:"none"}}><h6 style={{fontWeight:'bold',padding:'10px',textDecoration:'none',color:'black'}}><span style={{color:'darkblue'}}> I</span>nstagram  </h6></a> 
    </div>
    <div className='contact1'>
    <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png' width={'90px'} height={'90px'} style={{borderRadius:'5px',margin:'5px'}} />
    <a href='https://www.github.com/ishaquee' target="_blank" style={{textDecoration:"none"}}><h6 style={{fontWeight:'bold',padding:'10px',textDecoration:'none',color:'black'}}><span style={{color:'darkblue'}}> G</span>ithub  </h6></a> 
    </div>
  </div>
</div>
<div>
  <footer> Developed By <span style={{color:'darkred',fontWeight:'bolder'}}>Ishaque </span>  with 🖤</footer>
</div>
      </div>
  )
}

export default Contact