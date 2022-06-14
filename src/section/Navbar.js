import React from 'react'
import { Navbar,Nav,NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar1() {

  const pagerefreshPrevent=(e)=>{
    e.preventDefault();
  }
  return (
//     <div>   
//         <h2 className='heading'> <Link to='/' style={{ textDecoration: 'none' }}> <img src='https://static.wixstatic.com/media/809fa5_c02c7069a7f246ed986e103ade08b3d1~mv2.gif' style={{width:'200px'}}/> </Link> </h2>
//         <div className='right'>
//           <h6>Projects</h6>
//           <h6>About</h6>
//         </div>
// </div>


<div style={{display:'flex',flexWrap:'wrap'}}>
      <h2 className='heading'> <Link to='/' style={{ textDecoration: 'none' }}> <img src='https://static.wixstatic.com/media/809fa5_c02c7069a7f246ed986e103ade08b3d1~mv2.gif' style={{width:'200px'}}/> </Link> </h2>
      <div className='nav1'>
        <h6 className='nav1'> <Link to='/' style={{ textDecoration: 'none',color:'black' }} className='active'> Home</Link></h6>
        <h6 className='nav1'> <Link to='/Projects' style={{ textDecoration: 'none' ,color:'black' }} className='active'> Projects</Link></h6>
        <h6 className='nav1'> <Link to='/About' style={{ textDecoration: 'none',color:'black'  }} className='active'> About</Link></h6>
        <h6 className='nav1'> <Link to='/contact' style={{ textDecoration: 'none',color:'black'  }} className='active'> Contact</Link></h6>
        </div>
</div>

  );
}

export default Navbar1;