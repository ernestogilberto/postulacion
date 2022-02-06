import React from 'react';
import './NavBar.css'
import logo from '../../assets/icons/logo.svg';
import {Link} from 'react-router-dom';
import LinksContainer from '../LinksContainer/LinksContainer';


const NavBar = () => {
  return (
      <nav className="navbar">
        <Link to={`/`}><img src={logo} alt="" className="logo"/> </Link>
        <LinksContainer/>
      </nav>
  )
}

export default NavBar;