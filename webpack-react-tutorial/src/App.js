import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navigation from "./js/components/Navigation";
import HomePage from './js/pages/home'
import Productivity from './js/pages/Productivity'

class App extends Component {
    render() {
      return (
        <div className="App">
          <Productivity/>   
        </div>
      )
    }
}

export default App;
