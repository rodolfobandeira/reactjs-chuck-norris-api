import React, { Component } from 'react';
import './App.css';
import ChuckNorrisApi from './components/chuck_norris_api';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ChuckNorrisApi />
      </div>
    );
  }
}

export default App;
