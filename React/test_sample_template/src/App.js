import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// import css
import './App.css';

// import components
import NavBar from './components/NavBar';
import Home from './components/Home';
import Params from './components/Params';
import DomLogs from './components/DomLogs';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Route exact path="/" component={Home} />
        <Route path="/params" component={Params} />
        <Route path="/domlogs" component={DomLogs} />
      </div>
    </BrowserRouter>
  );
}

export default App;
