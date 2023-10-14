import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar(props) {
  const nav = useNavigate();
  const logout = () =>{
    localStorage.removeItem('authToken');
    nav('/login');
  }
  const onModeChange = () =>{
    props.setMode(props.mode == 'light'? 'dark':'light');
  }
  return (
    <div>
      <nav className={`navbar navbar-expand-lg ${props.navMode.nav} ${props.navMode.navText} ${props.navMode.navBg} `}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div id="userActions">
            <button className="userActionBtn" onClick={logout}>Logout</button>
            <Link to="/user/profile"><button className="userActionBtn">Profile</button></Link>
          </div>
        <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" onChange={onModeChange} role="switch" id="flexSwitchCheckDefault" checked={props.mode == 'light' ? false:true}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
        </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;