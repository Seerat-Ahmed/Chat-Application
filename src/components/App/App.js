import React, { Component } from 'react';
import './App.css';
import NavBar from '../NavBar/NavBar';
import About from '../About.js/About';

class App extends Component {
  render() {
    return (
      <div className="App">
         <About />
      </div>
    );
  }
}

export default App;
