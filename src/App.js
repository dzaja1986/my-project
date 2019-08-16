import React from 'react';
import './App.css';
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from './components/Home';
import Nav from './nav/nav'
import AboutMe from './components/AboutMe'


function App() {
  return (
   <div className="App">
    <Router>
      <div className="Nav">
        <Nav/>
      </div>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={AboutMe} />
      </div>
    </Router>
   </div>
  );
}

export default App;
