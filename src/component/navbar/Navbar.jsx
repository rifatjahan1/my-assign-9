import React from 'react';
import { NavLink } from 'react-router';
import './Navbar.css'
// import { AuthContext } from '../../context/Authcontext';

const Navbar = () => {
  // const userInfo= use(AuthContext);
  // console.log('nav',userInfo)
  const links = <>
    <li ><NavLink to="/">Home</NavLink></li>
    <li ><NavLink to="/apply">All-Apply</NavLink></li>
    <li ><NavLink to="/about">About</NavLink></li>
    <li ><NavLink to="/contactus">Contact</NavLink></li>



  </>
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
              <li ><NavLink to="/login">Login</NavLink></li>
              <li ><NavLink to="/register">Register</NavLink></li>
            </ul>
          </div>
          <a className=" font-bold text-3xl text-blue-500">jobPortal</a>
        </div>
        <div className="navbar-center">
         
        </div>
        <div className="navbar-end  hidden lg:flex ">

           <ul className="menu menu-horizontal px-1">
            {links}
            <li ><NavLink to="/login">Login</NavLink></li>
            <li ><NavLink to="/register">Register</NavLink></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;