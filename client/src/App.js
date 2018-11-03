import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import Customers from './components/customers';
import VersionTable from './components/versionTable';

class App extends Component {

    state = {
        canvasID: "newCanvas",
        coordinates: []
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <VersionTable/>

          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Athletic Hack</h1>
        </header>
        <Customers />
      </div>
    );
  }
}

export default App;
