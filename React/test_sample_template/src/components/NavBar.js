import React from 'react';
import { NavLink } from 'react-router-dom';
import SampleLogo from "../images/samplelogo.png";

function NavBar() {
  
    // mark the active button in the navigation bar
    let activeCSS = { color: "yellow" }

    return (
      <header className="page-header">
        <nav className="NavBar lighten-1">
            <div className="container">
              <span className="left">
                  <img src={SampleLogo} className="App-logo" alt="logo" />
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="App-title">Test Template - SPA Using React</span>
              </span>
              <ul className="right">
                  <li><NavLink activeStyle={activeCSS} exact to="/">Home</NavLink></li>
                  <li><NavLink activeStyle={activeCSS} to="/params">Params</NavLink></li>
                  <li><NavLink activeStyle={activeCSS} to="/domlogs">Dom Logs</NavLink></li>
              </ul>
            </div>
        </nav>
      </header>
    );
  }
  
  export default NavBar;