import React, { Component } from 'react';
import './App.css';
import RadioWidget from './components/radio_widget';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <RadioWidget />
      </div>
    );
  }
}

export default App;
