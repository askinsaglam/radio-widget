import React, { Component } from 'react';
import './App.css';
import RadioWidget from './components/radio_widget';
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./reducers";

class App extends Component {
  
  render() {
    return (
      <div>
        <Provider store={createStore(reducers)}>
          <RadioWidget />
        </Provider>   
      </div>
    );
  }
}

export default App;
