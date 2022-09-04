import React from 'react'
import './contact.css'
import {FaWordpress,FaReact} from 'react-icons/fa'
function Contact() {
  return (
    <div className='contact center'>
      <h2>Do you need a dazzling site for yourself?</h2>
      <h2>Need to contract me for your freelancing works?</h2>
      <h6 style={{fontSize:'25px',fontWeight:'900'}}> <span style={{borderBottom:'0.1px solid black'}}> Services </span></h6>

      <div className='center services'> 
        <div className='center service' >
          <img src='https://maxlencedigital.com/wp-content/uploads/2020/08/ui-ux-design-image.gif' width={'100px'} height={'100px'} style={{borderRadius:'5px'}} />
          <h5> <span style={{borderBottom:'1px solid black'}}> <span style={{color:'red'}}> Front</span> end / <span style={{color:'red'}}> UI</span>  Development </span> </h5>
          <p> We build web applications with web development best practices. Transform app designs into front-end code with HTML, CSS, and JavaScript. </p>
        </div>
        <div className='service'>
        <img src='https://i.pinimg.com/originals/fc/71/63/fc71635c7f1b09ed30413f59bb749582.gif' width={'100px'} height={'100px'} style={{borderRadius:'5px',margin:'5px'}} />
          <h5> <span style={{borderBottom:'1px solid black'}}>  <span style={{color:'darkorange',fontWeight:'bolder'}}> Data </span>   Analytics <span style={{fontSize:'12px'}}> (Tableau & PowerBi)</span> </span> </h5>
          <p>collects and analyzes information across the commerce to form informed choices or help other groups individuals and administrations in making sound choices.</p>
        </div>
        <div className='service' >
          <img src='https://res.cloudinary.com/instaclone2022/image/upload/v1662286764/portfolio/nodejs-1-logo_wigj1k.png' width={'100px'} height={'100px'} style={{borderRadius:'5px',margin:'5px'}} />
          <h5> <span style={{borderBottom:'1px solid black'}}> <span style={{color:'darkgreen',fontWeight:'bolder'}}> Backend</span> Development </span> </h5>
          <p>We will be managing the exchange of data between the server and the users. We will be focusing on the development of all server-side logic, maintenance, and definition of the central database, and ensuring high performance and responsiveness to requests from the front-end.</p>
        </div>
        <div className='service' >
        <img src='https://res.cloudinary.com/instaclone2022/image/upload/v1662287279/portfolio/200w_b94ucf.gif' width={'100px'} height={'100px'} style={{borderRadius:'0px'}} />

          <h5>  <span style={{borderBottom:'0.1px solid black'}}> <span style={{color:'darkBlue'}}> Wordpress</span>  Development </span>  </h5>
          <p>We design and implement websites for companies using the WordPress creation tool. We are responsible for both front-end and back-end development, including the implementation of themes and plugins. Our goal is to create attractive and user-friendly websites according to client specifications.</p>
        </div>
       
      </div>

<div>
  <h6 style={{fontWeight:'900',marginTop:'20px',fontSize:'25px'}}> <span style={{borderBottom:'0.1px solid black'}}> Contact me </span>   </h6>

  <div className='contacts'>
    <div className='contact1'>
    <img src='https://res.cloudinary.com/instaclone2022/image/upload/v1655811272/portfolio/https___s3.amazonaws.com_appforest_uf_f1626355319613x484158047569452200_Gmail_Small_Business_aa4gbu.gif' width={'100px'} height={'100px'} style={{borderRadius:'5px',margin:'5px'}} />
          {/* <h5>  <span style={{color:'darkorange',fontWeight:'bolder'}}> G</span>mail </h5> */}
          <a href='mailto:ishaquemohamed5@gmail.com' style={{textDecoration:"none"}}><h6 style={{fontWeight:'bold',padding:'10px',textDecoration:'none',color:'black'}}><span style={{color:'darkred'}}>G</span>mail </h6></a> 
    </div>
    <div className='contact1'>
    <img src='https://cliply.co/wp-content/uploads/2021/02/372102050_LINKEDIN_ICON_TRANSPARENT_1080.gif' width={'100px'} height={'100px'} style={{borderRadius:'5px',margin:'5px'}} />
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