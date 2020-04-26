import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navigation from "./js/components/Navigation";
import HomePage from './js/pages/home'
import Blog from "./js/MentalHealth/Blog";

class App extends Component {
    render() {
      return (
        <div className="App">
          <Blog/>   
        </div>
      )
    }
  }


export default App;
