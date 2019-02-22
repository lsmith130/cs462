import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { Profile } from './Profile';
import { Readings } from './Readings';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <nav style={{display: "flex", flexDirection: "column", alignItems: "space-between", justifyContent: "center"}}>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
          </nav>
          <header className="App-header">
            <Route path="/profile" component={Profile} />
            <Route exact path="/" component={Readings} />
            
          </header>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
