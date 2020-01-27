import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import './Header.css';
import Search from '../Search';


function Header() {
  return(
    <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <i class="fas fa-gamepad"></i>
          <Link to={"/"} className="navbar-brand">GameTracker</Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
       </button>
       <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
            <li className="navbar-item">
            <a type="button" className="btn btn-outline-secondary nav-link" data-toggle="modal" data-target="#loginModal">
             Sign In
            </a>
            </li>
            
            <li className="navbar-item">
              
              <Link to={"/registration"} className="btn btn-outline-info nav-link">Sign Up</Link>
            </li>
            
          </ul>
          </div>
        </nav>
        </Router>
      
  )
}


export default Header;
