import React from 'react'
import { Navbar,Nav,NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar1() {

  const pagerefreshPrevent=(e)=>{
    e.preventDefault();
  }
  return (
    <>
     <h2 className='heading'> <Link to='/' style={{ textDecoration: 'none' }}> <img src='https://static.wixstatic.com/media/809fa5_c02c7069a7f246ed986e103ade08b3d1~mv2.gif' style={{width:'200px'}}/> </Link> </h2>
 </>

  );
}

export default Navbar1;