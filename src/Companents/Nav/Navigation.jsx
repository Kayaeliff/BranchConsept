import React from 'react'
import { Link, NavLink } from "react-router-dom";
import "../Nav/Navigation.css";
import Logo from "../../assets/Rectangle.png"

function Navigation() {
  return (
    <>
    <nav id='main-navigation' className='navigation'>
        <div className='navigation_content'>
        
            <Link to="/Home">
                <img className='logo' src={Logo} alt="" />
            </Link>
        <ul className='nav_list'>
            <li className='nav_list_item'>
              <NavLink to="/Locations">Locations</NavLink>
            </li>
            <li className='nav_list_item'>
              <NavLink to="/Solutions">Solutions</NavLink>
            </li>
            <li className='nav_list_item'>
              <NavLink to="/Flexspace-Insights">Flexspace Insights</NavLink>
            </li>
            <li className='nav_list_item'>
              <NavLink to="/About-Us">About Us</NavLink>
            </li>
            <li className='nav_list_item'>
              <NavLink to="/Join-Us">Join Us </NavLink>
            </li>
            <li className='nav_list_item'>
              <NavLink to="/Contact-Us">Contact Us</NavLink>
            </li>   
          </ul>
          <button className='nav-demo-button' type='button'>Book a Demo</button>
            
        </div>
    </nav>
      
    </>
  );
}

export default Navigation
