import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
      <div className="Home container center">
        <br/>
        <br/>
        <h1 className="header center orange-text">About This Template</h1>
        <div className="row left-align">
          This is a generic sample Template.
          <br/>
          About is for describing what's the sample is for and how to use it.
          <br/>
          Parmas is the section where the end-user enters the parameters inputs that the sample will use.
          <br/>
          Dom Logs is simply displaying the dom JavaScript logs easily, similar to console log in the  developer tools.
          <br/>
          <br/>
        </div>

        <div className="row center">
          <Link to="/params" className="btn-large waves-effect waves-light orange">Get Started</Link>
        </div>
      </div>
    );
  }
  
  export default Home;