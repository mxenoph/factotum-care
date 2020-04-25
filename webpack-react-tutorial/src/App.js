
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navigation from "./js/components/Navigation";
import HomePage from './js/pages/home'

class App extends Component {
    render() {
      return (
        <div className="App">
          <HomePage/>   
        </div>
      )
    }
  }

  export default App;