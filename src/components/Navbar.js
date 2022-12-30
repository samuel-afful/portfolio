import React from 'react';
import logo from '../images/logo2.jpg'
import file from '../assets/CV.docx'

import AnchorLink from 'react-anchor-link-smooth-scroll'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    
<div className='container'>
    <Link className="navbar-brand" to="#"><img src={logo} className="logo"  alt="logo..."/></Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item active">
          
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About me</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/contact">Contact Me</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={file} download = "CVOfficial.docx">Download Resume</a>
        </li>
      </ul>
    
    </div>
    </div>
  </nav>
  );
}

export default Navbar;
