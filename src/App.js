import React, { Component } from 'react';

import Header from './Components/Header';
import Timer from './Components/Timer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="body">
          <div className="gif">
            <img height="400" src={require('./thane.gif')} alt="Thane's fedora flip" />
          </div>

          <Timer />
        </div>
      </div>
    );
  }
}

export default App;
