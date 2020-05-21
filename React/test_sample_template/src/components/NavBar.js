import React from 'react';
import { NavLink } from 'react-router-dom';
import SampleLogo from "../images/samplelogo.png";

function NavBar() {
  
    // mark the active button in the navigation bar
    let activeCSS = { color: "orange" }

    return (
      <nav className="NavBar light-blue lighten-1">
          <div className="container">
            <span className="left">
                <img src={SampleLogo} className="App-logo" alt="logo" />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="App-title">Test Sample Template</span>
            </span>
            <ul className="right">
                <li><NavLink activeStyle={activeCSS} exact to="/">Home</NavLink></li>
                <li><NavLink activeStyle={activeCSS} to="/params">Params</NavLink></li>
                <li><NavLink activeStyle={activeCSS} to="/domlogs">Dom Logs</NavLink></li>
            </ul>
          </div>
      </nav>
    );
  }
  
  export default NavBar;