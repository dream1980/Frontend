import React from 'react';
import { NavLink } from 'react-router-dom';
import SampleLogo from "../images/samplelogo.png";

function NavBar() {
    return (
      <nav className="NavBar light-blue lighten-1">
          <div className="container">
            <span className="left">
                <img src={SampleLogo} className="App-logo" alt="logo" />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="App-title">Test Sample Template</span>
            </span>
            <ul className="right">
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/params">Params</NavLink></li>
                <li><NavLink to="/domlogs">Dom Logs</NavLink></li>
            </ul>
          </div>
      </nav>
    );
  }
  
  export default NavBar;